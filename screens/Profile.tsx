import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

import { RootStackParamList } from '../types';
import { useRoute } from "@react-navigation/native";
import {
    Octicons,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome,
    AntDesign
} from "@expo/vector-icons";
import { Image, TouchableWithoutFeedback, ImageBackground, Button } from "react-native";
import style from '../components/ChatInput/style';
import background from "../assets/images/img.png"
import Users from "../data/Users";
import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect, useState } from "react"
import { graphqlOperation, Auth, API } from 'aws-amplify';
import { getUser } from './queries';
import { updatePatient } from '../src/graphql/mutations';







export type profileProps = {
    name: String;
    imageUri: String;
    healthDescription: String;
};



const Profile = (props: profileProps) => {



    const healthDescription = "This is just an example";



    const example = () => {


    }










    function button1() {
        console.log("Works");
        // setHobbies((health()));
        setcolourb1("white");
        setwidth(5);
        setcolourb2("black");
        setwidth2(0);
        setcolourb3("black");
        setwidth3(0);
        setEditMode(0);
        setButton2(0);
        setButton3(0);
        setButton1(1);




    }

    function edit() {
        setEditMode(1);
    }

    async function done() {
        setEditMode(0);
        const userInfo = await Auth.currentAuthenticatedUser();
        const userData = await API.graphql(
            graphqlOperation(
                getUser, {
                    id: userInfo.attributes.sub,
                }
            )
        )
        await API.graphql(
            graphqlOperation(
                updatePatient, {
                    input: {
                        id: userData.data.getUser.patientID,
                        facts: fact,
                        hobbies: hobbiess,
                        health: healthi,
                    }
                }
            )

        )
    }

    function button2() {
        console.log("Works");
        setwidth(0);

        setcolourb1("black");
        setcolourb2("white");
        setwidth2(5);
        setcolourb3("black");
        setwidth3(0);
        setEditMode(0);
        setButton1(0);
        setButton3(0);
        setButton2(1);

    }

    function button3() {
        console.log("Works");
        setcolourb1("black");
        setwidth(0);
        setcolourb2("black");
        setwidth2(0);
        setcolourb3("white");
        setwidth3(5);
        setEditMode(0);
        setButton1(0);
        setButton3(1);
        setButton2(0);

    }


    function isMe(User) {
        return User.id == "u1";
    }

    const user = () => {
        return Users.find(isMe).imageUri;
    };





    const userName = () => {
        return Users.find(isMe).name;
    };


    const [fact, setFacts] = useState()
    const [hobbiess, setHobbies] = useState()

    const [healthi, setHealth] = useState()

    const [colourb1, setcolourb1] = useState("white");
    const [width, setwidth] = useState(5);
    const [colourb2, setcolourb2] = useState();
    const [width2, setwidth2] = useState();
    const [colourb3, setcolourb3] = useState();
    const [width3, setwidth3] = useState();
    const [isInEditMode, setEditMode] = useState(0);
    const [isButton1, setButton1] = useState(1);
    const [isButton2, setButton2] = useState(0);
    const [isButton3, setButton3] = useState(0);
    const [name, setName] = useState();
    const [last, setLast] = useState();
    const [img, setImg] = useState();



    useEffect(() => {

        const update = async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser();
                const userData = await API.graphql(
                    graphqlOperation(
                        getUser, {
                            id: userInfo.attributes.sub,
                        }
                    )
                )

                setName(userData.data.getUser.patient.name);
                setLast(userData.data.getUser.patient.last);
                setImg(userData.data.getUser.patient.imageUri);




                if (!healthi) {
                    setFacts(userData.data.getUser.patient.facts);
                    setHobbies(userData.data.getUser.patient.hobbies);
                    setHealth(userData.data.getUser.patient.health);
                }



            }
            catch (e) {
                console.log("It's not working");

                console.log(e);
            }
        }
        update();
    }, []);


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            //  backgroundColor: "hsl(121, 47%, 35%)",


        },
        button1: {
            borderBottomColor: colourb1,
            width: "33.33%",
            borderBottomWidth: width,


        },
        button2: {
            borderBottomColor: colourb2,
            width: "33.33%",
            borderBottomWidth: width2

        }, button3: {
            borderBottomColor: colourb3,
            width: "33.33%",
            borderBottomWidth: width3

        },
        namesurname: {
            alignContent: "center",
            justifyContent: "center",
            flexDirection: 'column',
            marginBottom: 40,
            marginTop: 20,
        },

        nameOfUser: {
            marginTop: 20,
            textAlign: "center",
            alignSelf: "center",
            fontSize: 30,
            margin: 10,
            color: "white"
        },

        question: {
            fontSize: 30,
            margin: 10,
            color: "#001f8d"

        },

        answer: {

            fontSize: 20,
            margin: 10,

        },

        smallContainer: {
            borderColor: "rgba(14, 77, 146, 0.6)",
            padding: 20,
            width: "95%",
            height: "48%",
            borderWidth: 5,
            // margin: 30,
            alignSelf: "center",
            marginRight: 100,
            marginLeft: 100,
            marginTop: 10,
            borderRadius: 20,
            //  marginBottom: 400

            // borderBottomEndRadius: 70
        },

        input: {
            borderColor: "rgba(14, 77, 146, 0.6)",
            borderWidth: 2,
            margin: 10
        }
    })


    return (


        <View style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",

        }}>

            <ImageBackground source={require('../data/Images/img.png')} style={{ width: "100%" }} >




                <View style={styles.namesurname}>
                    <Image
                        size="100"
                        source={{ url: img }}
                        style={{
                            width: 120,
                            height: 120,
                            marginTop: 10,
                            // marginLeft: 10,
                            //marginLeft: "25%",
                            marginLeft: 0,
                            alignSelf: "center",
                            //padding: 20,
                            borderRadius: 40
                        }}
                    />



                    <View style={{ flexDirection: "column", marginTop: 20 }}>
                        <Text style={styles.nameOfUser}>   {name} {last}{"\n"}
                            64</Text>

                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <MaterialIcons name="location-on" size={27} color="red" />
                            <Text style={{ alignSelf: "center", color: "white" }}>North York General, floor 2</Text>
                        </View>

                    </View>



                </View>

                <View style={{ flexDirection: "row" }}>
                    <TouchableWithoutFeedback onPress={button1}>
                        <View style={styles.button1} >
                            <Text style={{ color: "white", fontSize: 23, alignSelf: "center", textAlign: "center" }}> Hobbies </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={button2}>
                        <View style={styles.button2} >
                            <Text style={{ color: "white", fontSize: 23, alignSelf: "center", textAlign: "center" }}> Interesting      Facts </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={button3}>
                        <View style={styles.button3} >
                            <Text style={{ color: "white", fontSize: 23, alignSelf: "center", textAlign: "center" }}>  Health Conditions </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </ImageBackground>


            <View style={styles.smallContainer}>

                <View style={{ height: 320, padding: 20 }}>

                    {isButton1 ?
                        !isInEditMode ?

                            <Text style={styles.answer}>{hobbiess}</Text>
                            :
                            <View style={styles.input}>
                                <TextInput
                                    defaultValue={hobbiess}
                                    multiline
                                    onChangeText={setHobbies}


                                // value={message}
                                />
                            </View>
                        :
                        isButton2
                            ?
                            !isInEditMode ?
                                <Text style={styles.answer}>{fact}</Text>
                                :
                                <View style={styles.input}>

                                    <TextInput
                                        defaultValue={fact}
                                        multiline
                                        onChangeText={setFacts}


                                    // value={message}
                                    />
                                </View>

                            :
                            !isInEditMode ?

                                <Text style={styles.answer}>{healthi}</Text>
                                :
                                <View style={styles.input}>

                                    <TextInput
                                        defaultValue={healthi}
                                        multiline
                                        onChangeText={setHealth}


                                    // value={message}
                                    />
                                </View>


                    }

                </View>





                {!isInEditMode ?

                    <TouchableWithoutFeedback onPress={edit}>

                        <FontAwesome name="edit" size={24} title="This" color="red" style={{ alignSelf: "flex-end", marginBottom: 3, flex: 0 }} />
                    </TouchableWithoutFeedback>

                    :

                    <TouchableWithoutFeedback onPress={done}>

                        <AntDesign name="checkcircle" size={24} color="rgba(79, 122, 170, 0.6)" style={{ alignSelf: "flex-end", marginBottom: 3 }} />
                    </TouchableWithoutFeedback>


                }

            </View>





        </View >



    );



}



export default Profile;