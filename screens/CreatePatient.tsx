import * as React from "react";
import { View, TextInput, Text, Button, Linking, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import style from "../components/ChatMessage/style";
import { createPatient, updateUser } from "../src/graphql/mutations"
import { graphqlOperation, API, Auth } from "aws-amplify";
import { getUser } from "./queries";
import { useNavigation } from "@react-navigation/native";





export default function createPatientForm() {
    const navigate = useNavigation();
    const [name, setName] = React.useState();
    const [last, setLast] = React.useState();
    const [relation, setRelation] = React.useState();
    const [health, setHealth] = React.useState();
    const [facts, setFact] = React.useState();
    const [hobiies, setHobbies] = React.useState();
    const [age, setAge] = React.useState();


    const onClick = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();

            const newPatient = await API.graphql(
                graphqlOperation(
                    createPatient, {
                        input: {
                            name: name,
                            last: last,
                            relation: relation,
                            facts: facts,
                            hobbies: hobiies,
                            health: health,
                            age: age,
                            imageUri: "https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"



                        }
                    }
                )
            )

            await API.graphql(graphqlOperation(updateUser, {
                input: {
                    id: userInfo.attributes.sub,
                    relation: "Daughter",
                    email: userInfo.attributes.email,
                    patientID: newPatient.data.createPatient.id

                }
            }
            ))

            navigate.navigate("Root")

            //console.log(newPatient.data.createPatient.id)


        }
        catch (e) {
            console.warn(e);
            return
        }
    };


    const example2 = () => {
        navigate.navigate("main")

    }

    const example = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
            graphqlOperation(
                getUser, {
                    id: userInfo.attributes.sub,
                }
            )
        )

        console.log(name);
        console.log(last);
        console.log(hobiies);
        console.log(relation);
        console.log(facts);
        console.log(health);






    }

    const styles = StyleSheet.create({

        question: {
            flexDirection: "row",
            marginTop: 15,
            marginLeft: 25

        },

        text:
        {
            fontSize: 20,
            marginRight: 20,
            width: 150,

        },
        longtext:
        {
            fontSize: 20,
            alignSelf: "center",
            marginBottom: 10,
            marginRight: 10,
            marginLeft: 10


        },
        input: {
            borderWidth: 2,
            width: 200,
            backgroundColor: "white",
            alignSelf: "center",
            height: 40,
            borderRadius: 10,

        },

        appButtonText: {
            fontSize: 18,
            color: "#fff",
            fontWeight: "bold",
            alignSelf: "center",
            textTransform: "uppercase"
        },
        appButtonContainer: {
            elevation: 8,
            backgroundColor: "#1976d2",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12,
            margin: 17
        }



    })

    return (
        <View>
            <ImageBackground style={{ width: "100%", height: "100%" }} source={require('../data/Images/img7.png')}>

                <View style={styles.question}>
                    <Text style={styles.text}>Name </Text>



                </View>
                <View style={[styles.input, { width: "90%" }]}>

                    <TextInput
                        defaultValue={""}
                        multiline
                        onChangeText={setName}



                    // value={message}
                    />

                </View>


                <View style={styles.question}>


                    <Text style={styles.text}>Surname </Text>


                </View>
                <View style={[styles.input, { width: "90%" }]}>

                    <TextInput
                        defaultValue={""}
                        multiline
                        onChangeText={setLast}



                    // value={message}
                    />

                </View>


                <View style={styles.question}>


                    <Text style={styles.text}>Relation </Text>


                </View>

                <View style={[styles.input, { width: "90%" }]}>

                    <TextInput
                        defaultValue={""}
                        multiline
                        onChangeText={setRelation}



                    // value={message}
                    />

                </View>

                <View style={styles.question}>


                    <Text style={styles.text}> Age </Text>


                </View>

                <View style={[styles.input, { width: "90%" }]}>

                    <TextInput
                        defaultValue={""}
                        multiline
                        onChangeText={setAge}



                    // value={message}
                    />

                </View>




                <View style={styles.question}>


                    <Text style={styles.longtext}>Do you know any hobbies that he/she has? </Text>


                </View>

                <View style={[styles.input, { width: "90%" }]}>

                    <TextInput
                        defaultValue={""}
                        multiline
                        onChangeText={setHobbies}



                    // value={message}
                    />

                </View>

                <View style={styles.question}>
                    <Text style={styles.longtext}>Tell us some interesting facts about him/her </Text>



                </View>

                <View style={[styles.input, { width: "90%" }]}>
                    <TextInput
                        defaultValue={""}
                        multiline
                        onChangeText={setFact}



                    // value={message}
                    />
                </View>

                <View style={styles.question}>
                    <Text style={styles.longtext}>Any health conditions that we need to know about </Text>



                </View>

                <View style={[styles.input, { width: "90%" }]}>
                    <TextInput
                        defaultValue={""}
                        multiline
                        onChangeText={setHealth}



                    />
                </View>






                <TouchableOpacity onPress={example2} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Submit</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )

}










