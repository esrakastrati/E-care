import React, { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import style from "../ChatInput/style";
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Fontisto,
  Entypo
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { API, graphqlOperation, Auth } from "aws-amplify"
import { createMessage } from "../../src/graphql/mutations"
import { updateChatRoom } from "../../src/graphql/mutations"

import GraphQLAPI from "@aws-amplify/api-graphql";
import { useRoute } from "@react-navigation/core";

const ChatInput = (props) => {

  const { chatRoomID } = props;
  const [message, setMessage] = useState();
  const [myUserId, setmyUserId] = useState();




  useEffect(() => {

    const fetchUser = async () => {

      const userInfo = await Auth.currentAuthenticatedUser();
      setmyUserId(userInfo.attributes.sub);
      console.log(myUserId);


    }
    fetchUser();


  }, [])
  const onPress = () => {
    if (!message) {
      onMicPress();
    } else {
      onSendPress();
    }
  };
  const onMicPress = () => {
    console.warn("Microphone");
  };

  const updateLastMessage = async (id: String) => {
    try {

      await API.graphql(
        graphqlOperation(
          updateChatRoom, {
            input: {
              id: chatRoomID,
              lastMessageID: id

            }
          }
        )
      )

    }
    catch (e) {

    }

  }

  const onSendPress = async () => {
    try {
      const newMessage = await API.graphql(
        graphqlOperation(
          createMessage, {
            input: {
              content: message,
              userID: myUserId,
              chatRoomID: chatRoomID
            }
          }
        )
      )

      await updateLastMessage(newMessage.data.createMessage.id);

    }
    catch (e) {
      console.warn(e);
      return
    }
  };

  return (
    <View style={style.container}>
      <View style={style.Mcontainer}>
        <TextInput
          placeholder={"Type a message"}
          style={style.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={style.button}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={22} />
          ) : (
              <MaterialIcons name="send" size={22} />
            )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
