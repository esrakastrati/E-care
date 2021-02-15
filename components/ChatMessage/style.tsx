import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const style = StyleSheet.create({
  container: {
    padding: 10
  },

  messageBox: {
    borderRadius: 5,
    padding: 5
  },

  name: {
    fontWeight: "bold",
    color: Colors.light.tint,
    marginBottom: 5
  },

  message: {},

  time: {
    alignSelf: "flex-end",
    color: "grey",
    fontSize: 10
  }
});

export default style;
