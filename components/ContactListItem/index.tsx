import React from "react";
import { Text, View } from "react-native";

import { User } from "../../types";
import { url } from "inspector";
import { Image, TouchableWithoutFeedback } from "react-native";
import style from "./style";
import moment from "moment";
import { graphqlOperation, Auth, API } from "aws-amplify";
import { createChatRoom, createChatRoomUser } from "../../src/graphql/mutations"
import { useNavigation } from "@react-navigation/native";

export type ContactListItemProps = {
  user: User;
};

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;

  const navigation = useNavigation();

  const isMine = () => {
    return user.id == "u1";
  };

  const onCLick = async () => {
    //Create a chat room
    // const newChatRoomData = await API.graphql(graphqlOperation(createChatRoom, { input: {} }));
    //Add myself to the chat room
    //if (!newChatRoomData.data) {
    //console.log("Error");
    //return
    //}
    //const newChatRoom = newChatRoomData.data.createChatRoom;
    //await API.graphql(graphqlOperation(createChatRoomUser, {
    //input: {
    //userID: user.id,
    //chatRoomID: newChatRoom.id
    //}
    //}
    //))
    //Add the other user to the chat room
    //const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
    //await API.graphql(graphqlOperation(createChatRoomUser, {
    //input: {
    //userID: userInfo.attributes.sub,
    //chatRoomID: newChatRoom.id
    //}
    //}


    //))

    //navigation.navigate("ChatRoom", { name: userInfo.attributes.sub });

    navigation.navigate("Cprofile", { name: user.name, imageUri: user.imageUri, id: user.id });
  };

  return (
    <TouchableWithoutFeedback onPress={onCLick}>
      <View style={style.container}>
        <View style={style.left}>
          {!isMine() && (
            <Image
              size="100"
              source={{ url: user.imageUri }}
              style={style.avatar}
            />
          )}
          {!isMine() && (
            <View style={style.mid}>
              <Text style={style.username}>  {user.name}</Text>
              <Text style={style.relationStyle}> {user.relation}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
