import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import style from "./style";
import { useNavigation } from "@react-navigation/native";

const NewMessageButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Contacts");
  };
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPress}>
        <Feather name="message-circle" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default NewMessageButton;
