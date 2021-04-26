import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 3,
    margin: 5,
    borderBottomColor: "grey",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50
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
    color: "grey",
    marginTop: 5
  },

  time: {
    fontSize: 10,
    color: "grey",
    marginRight: 20,
  },
  mid: {
    justifyContent: "space-around"
  }
});

export default style;
