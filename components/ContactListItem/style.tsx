import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
    borderColor: Colors.light.text,
    borderWidth: 3,
    borderRadius: 10
  },

  left: {
    flexDirection: "column"
  },

  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    padding: 20,
    borderRadius: 20
  },

  username: {
    // fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10
  },

  mid: {
    justifyContent: "space-around"
  }
});

export default style;
