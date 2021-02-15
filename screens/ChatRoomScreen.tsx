import React from "react";
import { View, Text, ImageBackground } from "react-native";

import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

import chatRoomData from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import cap from "../assets/images/cap.jpg";

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
    <ImageBackground style={{ width: "100%", height: "100%" }} source={cap}>
      <FlatList
        style={{ width: "100%" }}
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        keyExtractor={item => item.id}
        inverted
      />
      <ChatInput />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
