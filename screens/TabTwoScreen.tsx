import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Fontisto,
  SimpleLineIcons,
  Ionicons
} from "@expo/vector-icons";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <View style={styles.iconsUp}>
        <MaterialCommunityIcons
          name="human-greeting"
          size={100}
          style={styles.icon}
        />

        <MaterialIcons
          name="connect-without-contact"
          size={100}
          style={styles.icon}
        />
      </View>

      <View style={styles.iconsMiddle}>
        <FontAwesome name="calendar" size={100} style={styles.icon} />

        <Fontisto name="photograph" size={100} style={styles.icon} />
      </View>

      <View style={styles.iconsDown}>
        <Ionicons
          name="md-chatbubbles-outline"
          size={100}
          style={styles.icon}
        />

        <SimpleLineIcons
          name="game-controller"
          size={100}
          style={styles.icon}
        />
      </View>
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
  },
  iconsUp: {
    justifyContent: "center",
    padding: 30,
    marginLeft: 10,
    flexDirection: "row"

    //width: "80%",
    //height: "80%"
  },
  icon: {
    padding: 30
  },
  iconsDown: {
    justifyContent: "center",
    padding: 30,
    flexDirection: "row"

    //width: "80%",
    //height: "80%"
  },
  iconsMiddle: {
    justifyContent: "center",
    padding: 30,
    marginLeft: 10,
    flexDirection: "row"
  }
});
