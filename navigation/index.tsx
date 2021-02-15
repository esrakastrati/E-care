import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  BaseRouter
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, View } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import Colors from "../constants/Colors";
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5
} from "@expo/vector-icons";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import contacts from "../screens/ContactsScreen";
import ListOfChats from "../screens/ChatScreen";

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
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: "center",
        borderBottomWidth: 0,
        headerTitleStyle: { fontWeight: "bold", fontSize: 35, color: "#3C99DC" }
      }}
    >
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: "E-care",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                width: 60,
                justifyContent: "center",
                marginRight: 10,
                shadowColor: "black"

              }}
            >
              <MaterialCommunityIcons name="dots-vertical" size={30} color={"#3C99DC"} />



            </View>
          )
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          title: "Chats",
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
        }}
      />

      <Stack.Screen
        name="Contacts"
        component={contacts}
        options={{ title: "Contacts" }}
      />
      <Stack.Screen
        name="ListOfChats"
        component={ListOfChats}
        options={{ title: "New Chat" }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
