import React from "react";
import { Text, View } from "react-native";

import { ChatRoom } from "../../types";
import { url } from "inspector";
import { Image, TouchableWithoutFeedback } from "react-native";
import style from "./style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const navigation = useNavigation();

  const user = chatRoom.users[1];

  const onCLick = () => {
    navigation.navigate("ChatRoom", { name: user.name });
  };

  return (
    <TouchableWithoutFeedback onPress={onCLick}>
      <View style={style.container}>
        <View style={style.left}>
          <Image source={{ url: user.imageUri }} style={style.avatar} />
          <View style={style.mid}>
            <Text style={style.username}>{user.name}</Text>
            <Text style={style.lastM}>{chatRoom.lastMessage.content} </Text>
          </View>
        </View>
        <Text style={style.time}>
          {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
