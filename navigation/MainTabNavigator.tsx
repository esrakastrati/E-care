import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabTwoScreen from "../screens/TabTwoScreen";
import main from "../screens/main";
import createPatinent from "../screens/CreatePatient";


import { MainTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import { Entypo } from "@expo/vector-icons";
import { Auth, graphqlOperation, API } from "aws-amplify";
import { getUser } from "../screens/queries";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const [patient, setPatient] = React.useState(1);

  React.useEffect(() => {
    const ifPatiendUndefined = async () => {

      try {

        const userInfo = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
              id: userInfo.attributes.sub,
            }
          )
        )

        //console.log(userInfo.attributes.sub)


        if (userData.data.getUser.patient) {
          setPatient(1);

        }
        else {
          setPatient(0);
        }
      }

      catch (e) {
        console.log(e)
      }
    }
    ifPatiendUndefined();
  }, [])

  return (
    <MainTab.Navigator
      initialRouteName="E-CARE"
      tabBarOptions={{
        activeTintColor: "black",
        height: 0,

        style: { backgroundColor: "#ccff90", height: 0 },
        indicatorStyle: {
          backgroundColor: "black",
          height: 10,
          fontWeight: "500",
          fontSize: 100,
          color: "black",
          opacity: 0
        },



        showIcon: true
      }
      }
    >

      {patient ?
        <MainTab.Screen name="E-CARE" component={main}
          options={{
            style: { backgroundColor: "black", height: 0 },

            tabBarLabel: () => null
          }}
        />
        :
        <MainTab.Screen name="E-CARE" component={createPatinent}
          options={{
            style: { backgroundColor: "black", height: 0 },

            tabBarLabel: () => null
          }}
        />



      }
    </ MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Ian's Profile" }}
      />
    </TabTwoStack.Navigator>
  );
}
