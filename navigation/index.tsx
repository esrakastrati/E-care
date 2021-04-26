import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  BaseRouter
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View, ImageBackground, TouchableWithoutFeedback } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import Colors from "../constants/Colors";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  AntDesign
} from "@expo/vector-icons";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ContactProfile from "../screens/ContactProfile";
import CreatePatient from "../screens/CreatePatient";
import main from "../screens/main";

import contacts from "../screens/ContactsScreen";
import ListOfChats from "../screens/ChatScreen";
import CreateTask from "../screens/CreateTask";

import Users from "../data/Users";
import Profile from "../screens/Profile";
import style from "../components/ChatMessage/style";
import Schedule from "../screens/Schedule";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { updateUser } from "../src/graphql/mutations";
import { getUser } from "../screens/queries";
import { useEffect, useState } from "react"
import LogIn from "../screens/LogIn";







// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  const [name, setName] = useState(["Name Surname"]);


  function isMe(User) {
    return User.id == "u1";
  }

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  useEffect(() => {
    async function user() {
      const userInfo = await Auth.currentAuthenticatedUser();

      const userData = await API.graphql(
        graphqlOperation(
          getUser, {
            id: userInfo.attributes.sub,
          }
        )
      )
      console.log("TESTING");
      console.log(userData.data.getUser.name);
      setName(userData.data.getUser.name);
    };
    user();
  }, []);


  const threeDots = () => {
    console.log("Hey");
  };



  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
          shadowOpacity: 0,
          elevation: 0
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "center",
        borderBottomWidth: 0,
        headerTitleStyle: { fontWeight: "bold", fontSize: 35, color: Colors.light.text }
      }}
    >
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: name,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                //height: 0,
                justifyContent: "center",
                marginRight: 10,
                opacity: 1,
                backgroundColor: "transparent",


              }}
            >

              <TouchableWithoutFeedback onPress={signOut}>
                <MaterialIcons name="logout" size={27} color="white" style={{ marginRight: 20 }} />

              </TouchableWithoutFeedback>


            </View>
          )
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-between",
                marginRight: 10
              }}
            >
              <FontAwesome5 name="video" size={22} color={"white"} />
              <MaterialIcons name="call" size={22} color={"white"} />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={"white"}
              />
            </View>
          )
        })}
      />

      <Stack.Screen
        name="Cprofile"
        component={ContactProfile}
        options={{
          title: "",
          headerTitleStyle: { fontSize: 27 },
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 100,
                justifyContent: "space-between",
                marginRight: 10
              }}
            >


            </View>
          )
        }}
      />

      <Stack.Screen
        name="Contacts"
        component={contacts}
        options={{
          title: "My Community", headerTitleStyle: { fontSize: 25 },
          headerRight: () => (

            <View
              style={{
                flexDirection: "row",
                width: 20,
                justifyContent: "space-between",
                marginRight: 10
              }}>





              <TouchableWithoutFeedback onPress={threeDots}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={27}
                  color={"white"}
                />
              </TouchableWithoutFeedback>
            </View>
          )
        }}

      />
      <Stack.Screen
        name="ListOfChats"
        component={ListOfChats}
        options={{ title: "Chats" }}
      />

      <Stack.Screen
        name="Information"
        component={CreatePatient}
        options={{ title: "Create Profile of a patient", headerTitleStyle: { fontSize: 20 } }}
      />

      <Stack.Screen
        name="CreateTask"
        component={CreateTask}
        options={{ title: "Task" }}
      />

      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{ title: "Schedule" }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "   MyProfile   ",
          headerTitleStyle: { fontSize: 27 },
          headerRight: () => (

            <View
              style={{
                flexDirection: "row",
                width: 20,
                justifyContent: "space-between",
                marginRight: 10
              }}>





              <TouchableWithoutFeedback onPress={signOut}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={27}
                  color={"white"}
                />
              </TouchableWithoutFeedback>
            </View>
          )
        }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />

      <Stack.Screen
        name="main"
        component={main}
        options={{ title: "Main" }}
      />

      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{ title: "Oops!" }}
      />
    </ Stack.Navigator>
  );
}
