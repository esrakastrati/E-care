import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { moderateScale } from 'react-native-size-matters'


const style = StyleSheet.create({
  container: {
    padding: 10,
    // borderWidth: 5
  },

  messageBox: {
    borderRadius: 5,
    padding: 1

  },

  name: {
    fontWeight: "bold",
    color: Colors.light.tint,
    marginBottom: 5
  },

  message: {
    marginRight: 0,
    //alignSelf: "center",
    fontSize: 16,
    margin: 0,
    borderRadius: 5,
    alignSelf: "center",
    padding: 3,

    //borderWidth: 3,
    //borderColor: "grey"
    backgroundColor: "rgba(79, 122, 172, 0.45)",
  },
  message2: {
    marginRight: 0,
    //alignSelf: "center",
    fontSize: 16,
    //borderWidth: 3,
    //borderColor: "grey",
    margin: 2,
    borderRadius: 5,
    alignSelf: "center",
    padding: 3,

    //borderRadius: 10,
    //padding: 2,
    backgroundColor: "rgba(64,64,64,0.3)"
  },

  time: {
    alignSelf: "flex-end",
    color: "grey",
    fontSize: 10,
    margin: 2
  },
  arrow_left: {
    left: moderateScale(-6, 0.5)

  },
  arrow_left_container:
  {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 40,
    margin: 5
  }
});

export default style;
