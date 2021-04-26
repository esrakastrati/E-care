import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../types';
import { useRoute } from "@react-navigation/native";
import {
    Octicons,
    MaterialCommunityIcons,
    MaterialIcons,
    FontAwesome5
} from "@expo/vector-icons";
import { Image, TouchableWithoutFeedback } from "react-native";
import { createChatRoom, createChatRoomUser } from "../src/graphql/mutations"
import { getChatRoomUser, listChatRooms } from "../src/graphql/queries"

import { graphqlOperation, Auth, API } from "aws-amplify";
import { User } from "../types";

import style from '../components/ChatInput/style';
import { useNavigation } from "@react-navigation/native";


export type ContactListItemProps = {
    user: User;
};



const ContactProfile = (props: ContactListItemProps) => {

    const { user } = props;

    const navigation = useNavigation();
    const route = useRoute();
    const { name, imageUri, relation, id } = route.params;

    const message = async () => {
        //navigation.navigate("ListOfChats");
        console.log("==================124235345================");

        const usersData = await API.graphql(
            graphqlOperation(
                listChatRooms

            )
        )

        console.log(usersData);

        console.log("==================124235345================");

    };

    const onCLick = async () => {

        console.log("1========================================================")

        //Create a chat room


        const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom, { input: {} }));
        //Add myself to the chat room
        console.log("2========================================================")
        console.log(newChatRoomData);


        if (!newChatRoomData.data) {
            console.log("Error");
            return
        }



        const newChatRoom = newChatRoomData.data.createChatRoom;
        console.log(newChatRoom);

        await API.graphql(graphqlOperation(createChatRoomUser, {
            input: {
                userID: id,
                chatRoomID: newChatRoom.id
            }
        }
        ))


        console.log(id);
        console.log(newChatRoom.id);
        const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
        await API.graphql(graphqlOperation(createChatRoomUser, {
            input: {
                userID: userInfo.attributes.sub,
                chatRoomID: newChatRoom.id
            }
        }


        ))

        console.log(userInfo.attributes.sub);
        console.log(newChatRoom.id);
        //console.log(userInfo.attributes.name)

        //Add the other user to the chat room


        navigation.navigate("ChatRoom", { id: newChatRoom.id, name: "Coded" });

        // navigation.navigate("Cprofile", { name: user.name, imageUri: user.imageUri, relation: user.relation });
    };



    return (


        <View style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",

        }}>



            <View style={{ alignContent: "center", justifyContent: "center", flexDirection: 'column' }}>

                <Text style={{ fontSize: 30, margin: 10, textAlign: "center" }}>   {name} </Text>

                <Image
                    size="100"
                    source={{ url: imageUri }}
                    style={{
                        width: 200,
                        height: 200,
                        marginTop: 10,
                        alignContent: "center",
                        marginLeft: 110,
                        //marginLeft: "25%",

                        //padding: 20,
                        borderRadius: 100
                    }}
                />

                <Text style={{ marginTop: 15, textAlign: "center" }}>   {relation} </Text>

            </View>
            <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", alignContent: "center", marginTop: 30 }}>
                <View style={{ backgroundColor: "rgba(79, 122, 172, 0.45)", padding: 35, height: 150, width: 150, borderRadius: 80, margin: 25 }}>
                    <FontAwesome5 name="video" size={70} color={"#001f8d"} invert />
                </View>
                <View style={{ backgroundColor: "rgba(79, 122, 172, 0.45)", padding: 35, height: 150, width: 150, borderRadius: 80, margin: 25 }}>

                    <MaterialIcons name="call" size={70} color={"#001f8d"} />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center", alignContent: "center", marginTop: 30 }}>
                <TouchableWithoutFeedback onPress={onCLick}>
                    <View style={{ backgroundColor: "rgba(79, 122, 172, 0.45)", padding: 40, height: 150, width: 150, borderRadius: 80, margin: 25 }}>
                        <MaterialCommunityIcons name="comment-text-multiple" size={70} color="#001f8d" />
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16, alignSelf: "center" }}>Message </Text>

                    </View>
                </TouchableWithoutFeedback>
            </View>


        </View >



    );



}



export default ContactProfile;