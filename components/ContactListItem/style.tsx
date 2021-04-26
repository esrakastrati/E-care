import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    //width: "100%",
    justifyContent: "space-between",
    padding: 20,
    borderWidth: 3,
    borderRadius: 10,
    margin: 10,
    borderColor: "#001F3F"
    // backgroundColor: "rgba(17, 186, 165, 0.2)",

    // marginRight: 30
  },

  left: {
    flexDirection: "row"
  },

  avatar: {
    width: 100,
    height: 100,
    marginRight: 10,
    //padding: 20,
    borderRadius: 50
  },

  username: {
    // fontWeight: "bold",
    fontSize: 30,
    paddingTop: 10,
    color: "#001F3F",
    marginLeft: 27,
    textAlign: "center"
  },

  relationStyle: {
    fontSize: 14,
    color: "#001F3F",

    marginRight: 70,
    marginLeft: 70

  },

  mid: {
    justifyContent: "space-around"
  }
});

export default style;
