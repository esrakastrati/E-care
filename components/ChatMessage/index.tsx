import React from "react";
import { Text, View, Image } from "react-native";
import { Message } from "../../types";
import moment from "moment";
import style from "../ChatMessage/style";
import Svg, { Path } from 'react-native-svg';
import { moderateScale } from 'react-native-size-matters'
import { Entypo } from '@expo/vector-icons';




export type ChatMessageProps = {
  message: Message;
  myID: String;
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message, myID } = props;
  const isMine = () => {
    return message.user.id == myID;
  };

  const formatter = new Intl.DateTimeFormat("en-GB", {
    hour: 'numeric', minute: 'numeric'

  });

  return (
    <View style={style.container}>
      {isMine() && <View
        style={[
          style.messageBox,
          {
            alignSelf: "flex-end",
            //borderWidth: isMine() ? 0 : 3,

            //borderColor: isMine() ? "rgba(79, 122, 172, 0.45)" : "grey",
            marginRight: isMine() ? 0 : 50,
            marginLeft: isMine() ? 50 : 0,

          },
        ]}
      >
        <View style={{ flexDirection: "row" }}>

          <View style={style.message}>
            <Text style={{ fontSize: 16, marginRight: 20 }}> {message.content} </Text>

            <Text style={style.time}> {formatter.format(Date.parse(message.createdAt))} </Text>
          </View>
          <Entypo name="triangle-right" size={24} color="rgba(79, 122, 172, 0.45)" style={{ alignSelf: "center", marginLeft: -7, }} />

          <Image source={{ url: message.user.imageUri }} style={{ alignSelf: "center", width: 40, height: 40, borderRadius: 20 }} />

        </View>

      </View>}

      {!isMine() &&
        <View
          style={[
            style.messageBox,
            {
              // backgroundColor: isMine() ? "rgba(79, 122, 172, 0.45)" : "white",
              // borderWidth: isMine() ? 0 : 3,

              // borderColor: isMine() ? "rgba(79, 122, 172, 0.45)" : "grey",
              marginRight: isMine() ? 0 : 50,
              marginLeft: isMine() ? 50 : 0
            },
          ]}
        >

          <View style={{ flexDirection: "row" }}>
            <Image source={{ url: message.user.imageUri }} style={{ alignSelf: "center", width: 40, height: 40, borderRadius: 20 }} />
            <Entypo name="triangle-left" size={24} color="rgba(64,64,64,0.3)" style={{ alignSelf: "center", marginRight: -9, }} />

            <View style={style.message2}>
              <Text style={{ fontSize: 16 }}> {message.content} </Text>
              <Text style={style.time}> {formatter.format(Date.parse(message.createdAt))} </Text>

            </View>
          </View>
        </View>}
    </View>
  );
};

export default ChatMessage;