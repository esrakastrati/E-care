import React from "react";
import { Text, View } from "react-native";
import { Message } from "../../types";
import moment from "moment";
import style from "../ChatMessage/style";

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;
  const isMine = () => {
    return message.user.id == "u1";
  };

  return (
    <View style={style.container}>
      <View
        style={[
          style.messageBox,
          {
            backgroundColor: isMine() ? "#DDA0DD" : "white",
            marginRight: isMine() ? 0 : 50,
            marginLeft: isMine() ? 50 : 0
          }
        ]}
      >
        {!isMine() && <Text style={style.name}> {message.user.name} </Text>}

        <Text style={style.message}> {message.content} </Text>
        <Text style={style.time}> {moment(message.createdAt).fromNow()} </Text>
      </View>
    </View>
  );
};

export default ChatMessage;
