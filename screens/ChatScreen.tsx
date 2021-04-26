import * as React from "react";
import { StyleSheet, FlatList } from "react-native";

import { View } from "../components/Themed";
import ChatListItem from "../components/ChatListItem";
import NewMessageButton from "../components/NewMessageButton";
import { useEffect, useState } from "react"
import { Auth, graphqlOperation, API } from "aws-amplify"
import { getUser } from "./queries"

export default function ChatsScreen() {

  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        // console.log("jsdbvsjdbvnksdjbnv userInfo");

        console.log(userInfo);


        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
              id: userInfo.attributes.sub,
            }
          )
        )

        setChatRooms(userData.data.getUser.chatRoomUser.items)

        console.log(userData.data.getUser.chatRoomUser.items);


      }
      catch (e) {
        console.log(e);
      }
    }
    fetchChatRooms();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}

        keyExtractor={(item) => item.email}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
});
