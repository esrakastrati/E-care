import * as React from "react";
import { StyleSheet, FlatList } from "react-native";

import { View } from "../components/Themed";
import ContactListItem from "../components/ContactListItem";
import { useEffect, useState } from 'react';
import {
  Auth,
  API,
  graphqlOperation,
} from 'aws-amplify';
import { getUser, listUsers } from '../src/graphql/queries';
import { createUser } from '../src/graphql/mutations';

export default function chatScreen() {

  const [Users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await API.graphql(
          graphqlOperation(
            listUsers
          )
        )
        console.log("==========================================");

        console.log(usersData);
        setUsers(usersData.data.listUsers.items);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUsers();
  }, [])

  return (


    < View style={styles.container} >
      <FlatList
        style={{ width: "100%" }}
        data={Users}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={item => item.id}
      />
    </View >
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
