import React, { useState } from "react";
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

const ChatInput = () => {
  const [message, setMessage] = useState();
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

  const onSendPress = () => {
    console.warn(`Sending ${message}`);
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
