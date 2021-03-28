import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Text, View, ImageBackground } from "react-native";

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

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();


  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true });
      //console.log(userInfo);

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

        }

        else {




          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri: "https://i.pinimg.com/564x/71/f3/51/71f3519243d136361d81df71724c60a0.jpg",
            relation: "Friend",

          }
          await API.graphql(graphqlOperation(createUser, { input: newUser }))

        }




      }
    }

    fetchUser();
  }, [])




  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ImageBackground source={require('./data/Images/img.png')} style={{ width: "100%", height: "100%" }}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ImageBackground>


    );
  }
}

export default withAuthenticator(App)

