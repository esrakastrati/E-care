import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { ActivityIndicator, Text, View, ImageBackground, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


import {
  Auth,
  API,
  graphqlOperation,
} from 'aws-amplify';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';

import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/SignIn'
import SignUp from './screens/SigUp'
import Home from './screens/main'
import ConfirmSignUp from './screens/ConfirmSignUp'
import {
  DefaultTheme,
  DarkTheme,
  BaseRouter
} from "@react-navigation/native";


import NotFoundScreen from "./screens/NotFoundScreen";
import { RootStackParamList } from "./types";
import MainTabNavigator from "./navigation/MainTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import Colors from "./constants/Colors";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  AntDesign
} from "@expo/vector-icons";
import ChatRoomScreen from "./screens/ChatRoomScreen";
import ContactProfile from "./screens/ContactProfile";
import CreatePatient from "./screens/CreatePatient";
import main from "./screens/main";

import contacts from "./screens/ContactsScreen";
import ListOfChats from "./screens/ChatScreen";
import CreateTask from "./screens/CreateTask";

import Users from "./data/Users";
import Profile from "./screens/Profile";
import style from "./components/ChatMessage/style";
import Schedule from "./screens/Schedule";
import LogIn from "./screens/LogIn";




const AuthenticationStack = createStackNavigator();
const Stack = createStackNavigator<RootStackParamList>();





const AuthenticationNavigator = props => {

  return (

    <AuthenticationStack.Navigator headerMode="none">

      <AuthenticationStack.Screen name="SignIn">

        {screenProps => (

          <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AuthenticationStack.Screen>

      <AuthenticationStack.Screen name="SignUp" component={SignUp} />

      <AuthenticationStack.Screen

        name="ConfirmSignUp"

        component={ConfirmSignUp}

      />

    </AuthenticationStack.Navigator>

  );

};


function RootNavigator({ updateAuthState }) {

  const [Name, setName] = useState(["Name Surname"]);



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



  function isMe(User) {
    return User.id == "u1";
  }

  async function signOut() {
    try {
      await Auth.signOut();
      update();

    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const threeDots = () => {
    console.log("Hey");
  };

  const update = () => {
    updateAuthState('loggedOut');


  }




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
          title: Name,
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

const Initializing = () => {

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <ActivityIndicator size="large" color="tomato" />

    </View>

  );

};




Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  const isLoadingComplete = useCachedResources();
  const [isUserLoggedIn, setUserLoggedIn] = useState('loggedOut');


  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }





  useEffect(() => {
    const checkAuthState = async () => {
      Name = "Inpukjdsfn"
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });

      setUserLoggedIn('loggedIn');
      console.log(" NAME: " + Name);

      if (userInfo) {
        const userData = await API.graphql(
          graphqlOperation(
            getUser,
            { id: userInfo.attributes.sub }
          )
        )

        if (userData.data.getUser) {
          console.log(userData);
          console.log("User is already created in the database");
          console.log(userData.data.getUser.name);


          setUserLoggedIn('loggedIn');
          Name: userData.data.getUser.name;


        }

        else {




          const newUser = {
            id: userInfo.attributes.sub,
            Name: userInfo.username,
            imageUri: "https://i.pinimg.com/564x/71/f3/51/71f3519243d136361d81df71724c60a0.jpg",
            relation: "Friend",

          }
          await API.graphql(graphqlOperation(createUser, { input: newUser }))

        }




      }
    }

    checkAuthState();
  }, [])




  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>

        {isUserLoggedIn === 'initializing' && <Initializing />}

        {isUserLoggedIn === 'loggedIn' && (

          <ImageBackground source={require('./data/Images/img.png')} style={{ width: "100%", height: "100%" }}>

            <RootNavigator updateAuthState={updateAuthState} />
          </ImageBackground>

        )}
        {isUserLoggedIn === 'loggedOut' && (

          <AuthenticationNavigator updateAuthState={updateAuthState} />

        )}
      </NavigationContainer>




    );
  }
}

export default App
