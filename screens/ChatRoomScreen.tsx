import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";

import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import cap from "../assets/images/cap.png";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { messagesByChatRoom } from "../src/graphql/queries";
import { onCreateMessage } from "../src/graphql/subscriptions"


const ChatRoomScreen = () => {
  const route = useRoute();
  const [messages, setMessage] = useState([]);
  const [myId, setMyId] = useState([]);
  console.log(route.params);



  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: (data) => {
        const newMessage = data.value.data.onCreateMessage;
        if (newMessage.chatRoomID != route.params.id) {
          return;
        }
        else {
          setMessage([newMessage, ...messages]);
        }
        console.log(data.value.data);
        fetchMessages();

      }
    });
    return () => subscription.unsubscribe();



  }, [])

  const fetchMessages = async () => {

    const messageData = await API.graphql(
      graphqlOperation(
        messagesByChatRoom, {
          chatRoomID: route.params.id,
          sortDirection: "DESC",
        }
      )
    )

    console.log("FETCH MESSAGES")


    setMessage(messageData.data.messagesByChatRoom.items)
    console.log(messageData.data.messagesByChatRoom.items);


  }

  useEffect(() => {
    fetchMessages();
  }, [])

  useEffect(() => {
    const getMyID = async () => {
      const userData = await Auth.currentAuthenticatedUser();
      setMyId(userData.attributes.sub);

    }
    getMyID();
  }, []);
  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={cap}>
      <View style={{ width: "95%", height: "95%", margin: 10, borderWidth: 4, borderColor: "rgba(79, 122, 172, 0.45)", borderRadius: 10 }}>
        <FlatList
          style={{ width: "100%" }}
          data={messages}
          renderItem={({ item }) => <ChatMessage myID={myId} message={item} />}
          keyExtractor={item => item.id}
          inverted
        />
        <ChatInput chatRoomID={route.params.id} />
      </View>
    </ImageBackground>
  );
};

export default ChatRoomScreen;
