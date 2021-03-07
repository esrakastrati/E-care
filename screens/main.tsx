import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import { Image, ImageBackground, Dimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Users from "../data/Users"

export default function chatScreen() {
  const navigation = useNavigation();

  function isMe(User) {
    return User.id == "u1";
  }

  const user = () => {
    return Users.find(isMe).imageUri;
  };


  const onPress1 = () => {
    navigation.navigate("ListOfChats");
    user();
  };

  const onPress2 = () => {
    navigation.navigate("Contacts");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../data/Images/img.png')} style={styles.back} >


        <View style={styles.profile}>

          <Image source={{ uri: user() }} style={{
            width: 100,
            height: 100,
            margin: 20,
            marginRight: 10,
            borderRadius: 50,
            opacity: 1
          }} />
          <Text style={styles.profileT} > Profile </Text>
        </View>
        <View style={styles.iconsUp}>

          <TouchableOpacity onPress={onPress2}>
            <View style={styles.icon}>
              <Image source={require('../data/Images/Community.png')}

                style={{
                  width: 70,
                  height: 70,
                  marginBottom: 20,
                  borderRadius: 100,
                  alignSelf: "center"
                }} />
              <Text style={{ color: "#ff964f", marginTop: 5, marginLeft: 10, fontWeight: "bold" }}> Community </Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={onPress1}>
            <View style={styles.icon}>
              <Image source={require('../data/Images/Messages.png')}

                style={{
                  width: 70,
                  height: 70,
                  marginBottom: 20,
                  borderRadius: 100,
                  alignSelf: "center"
                }} />
              <Text style={{ color: "#DE82FF", marginTop: 5, marginLeft: 15, fontWeight: "bold" }}> Messages </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.iconsMiddle}>
          <View style={styles.icon}>
            <Image source={require('../data/Images/Schedule.png')}

              style={{
                width: 70,
                height: 70,
                marginBottom: 20,
                borderRadius: 100,
                alignSelf: "center"
              }} />
            <Text style={{ color: "#FF0000", marginTop: 5, marginLeft: 15, fontWeight: "bold" }}>Schedule </Text>
          </View>
          <View style={styles.icon}>
            <Image source={require('../data/Images/Gallery.png')}

              style={{
                width: 70,
                height: 70,
                marginBottom: 20,
                borderRadius: 100,
                alignSelf: "center"
              }} />
            <Text style={{ color: "#fdd835", marginTop: 5, marginLeft: 15, fontWeight: "bold" }}> Memories </Text>
          </View>
        </View>

        <View style={styles.iconsDown}>

          <View style={styles.icon}>
            <Image source={require('../data/Images/About.png')}

              style={{
                width: 70,
                height: 70,
                marginBottom: 20,
                borderRadius: 100,
                alignSelf: "center"
              }} />
            <Text style={{ color: "black", marginTop: 5, marginLeft: 20, fontWeight: "bold" }}> About </Text>
          </View>

          <View style={styles.icon}>
            <Image source={require('../data/Images/Games.png')}

              style={{
                width: 70,
                height: 70,
                marginBottom: 20,
                borderRadius: 100,
                alignSelf: "center"
              }} />
            <Text style={{ color: "#2196f3", marginTop: 5, marginLeft: 20, fontWeight: "bold" }}> Games </Text>
          </View>

        </View>
      </ImageBackground>
    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hsl(121, 47%, 35%)",


  },

  back: {
    flex: 1,
    width: "100%",
    height: "100%",
    //height: Dimensions.get("window").height,
    resizeMode: "cover",
    position: "absolute"
  },
  top: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 50,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#3C99DC",


  },

  dots: {
    marginRight: 0,
    marginBottom: 0,
    padding: 0,
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",

  },

  titleE: {
    fontSize: 50,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#8bc34a"
  },

  profile: {
    width: "80%",
    justifyContent: "center",
    flexDirection: "row",
    marginRight: 40,
    marginLeft: 40,
    //borderColor: "#3C99DC",
    //borderWidth: 5,
    backgroundColor: "rgba(17, 186, 165, 0.3)",
    borderRadius: 30,
    marginTop: "5%",


  },
  profileT: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 30,
    fontSize: 28,
    color: "#aed581",
    margin: 20


  },

  descrip: {
    textAlign: "center",
    paddingTop: 8


  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },

  iconsUp: {
    justifyContent: "center",
    padding: 10,
    flexDirection: "row"
  },

  iconsDown: {
    justifyContent: "center",
    padding: 15,
    flexDirection: "row"

    //width: "80%",
    //height: "80%"
  },

  iconsMiddle: {
    justifyContent: "center",
    padding: 10,
    flexDirection: "row"
  },

  icon: {
    height: 150,
    width: 160,
    //alignContent: "center",
    padding: 31,
    //paddingRight: 45,
    //borderColor: "#3C99DC",
    //borderWidth: 5,
    //backgroundColor: "#aed581",
    //backfaceVisibility: "visible",
    backgroundColor: "rgba(17, 186, 165, 0.3)",
    //flexDirection: "column",
    justifyContent: "center",
    margin: 10,
    borderRadius: 30,
    opacity: 0.9

  },



  figure: {
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 200,
    //reverse: true
  },



  avatar: {
    width: 10,
    height: 10,
    //margin: 20,
    //marginRight: 10,
    //borderRadius: 25,
    // opacity: 1
  },



}

);
