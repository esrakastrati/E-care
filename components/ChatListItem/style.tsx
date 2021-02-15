import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10
  },

  left: {
    flexDirection: "row"
  },

  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50
  },

  username: {
    fontWeight: "bold",
    fontSize: 15
  },

  lastM: {
    fontSize: 16,
    color: "grey"
  },

  time: {
    fontSize: 10,
    color: "grey"
  },
  mid: {
    justifyContent: "space-around"
  }
});

export default style;
