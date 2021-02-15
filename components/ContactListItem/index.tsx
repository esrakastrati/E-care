import React from "react";
import { Text, View } from "react-native";

import { User } from "../../types";
import { url } from "inspector";
import { Image, TouchableWithoutFeedback } from "react-native";
import style from "./style";
import moment from "moment";
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

  const onCLick = () => {
    //navigation.navigate("ChatRoom", { name: user.name });
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
              <Text style={style.username}> Name: {user.name}</Text>
              <Text style={style.username}> email: {user.email}</Text>
              <Text style={style.username}> relation: {user.relation}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;
