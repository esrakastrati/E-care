import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import { Image, ImageBackground, Dimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Users from "../data/Users";
import { Auth, graphqlOperation, API } from "aws-amplify"
import { getUser } from "./queries"

import { log } from "util";
import { useEffect } from "react";
import { updatePatient, updateUser } from "../src/graphql/mutations";




export default function chatScreen({ updateAuthState }) {

  var [patient, setPatient] = React.useState();
  var [name, setName] = React.useState();
  var [img, setimg] = React.useState();
  var [healthDescription, sethealth] = React.useState();







  useEffect(() => {

    const update = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
              id: userInfo.attributes.sub,
            }
          )
        )
        console.log(userData.data.getUser.patient.name);
        setName(userData.data.getUser.patient.name);
        setimg(userData.data.getUser.patient.imageUri);

      }
      catch (e) {
        console.log(e);
      }
    }
    update();
  }, []);





  const navigation = useNavigation();










  const onPress1 = () => {
    navigation.navigate("ListOfChats");
  };

  const example = async () => {

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
      } {
        setPatient(0);
      }
    }

    catch (e) {
      console.log(e)
    }


  };

  const example2 = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    const userData = await API.graphql(
      graphqlOperation(
        updateUser, {
          id: userInfo.attributes.sub,
          relation: "Friendss"
        }
      )
    )

  }

  const onPress2 = () => {
    navigation.navigate("Contacts");
  };

  const onPress3 = () => {

    console.log(healthDescription);

    navigation.navigate("Profile", { name: name, imageUri: img, healthDescription: healthDescription });

    console.log(healthDescription);



  };
  const onPress4 = () => {
    navigation.navigate("Schedule");


  };

  const onPress5 = () => {
    navigation.navigate("LogIn");


  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../data/Images/img.png')} style={styles.back} >

        <TouchableOpacity onPress={onPress3}>

          <View style={styles.profile}>

            <Image source={{ uri: img }} style={{
              width: 90,
              height: 90,
              //margin: 20,
              marginLeft: 45,
              marginBottom: 20,
              marginTop: 20,
              borderRadius: 50,
              opacity: 1
            }} />
            <Text style={styles.profileT} > {name}'s Profile </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.iconsUp}>


          <TouchableOpacity onPress={onPress2}>
            <View style={styles.icon}>
              <Image source={require('../data/Images/Community.png')}

                style={{
                  width: 90,
                  height: 90,
                  marginBottom: 20,
                  marginTop: 20,

                  borderRadius: 100,
                  alignSelf: "center"
                }} />
              <Text style={{ color: "#ff964f", marginTop: 5, marginBottom: 10, marginLeft: 10, fontWeight: "bold", fontSize: 18 }}> Community </Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={onPress1}>
            <View style={styles.icon}>
              <Image source={require('../data/Images/Messages.png')}

                style={{
                  width: 90,
                  height: 90,
                  marginBottom: 20,
                  borderRadius: 100,
                  alignSelf: "center"
                }} />
              <Text style={{ color: "#DE82FF", marginTop: 5, marginLeft: 15, fontWeight: "bold", fontSize: 18 }}> Messages </Text>
            </View>
          </TouchableOpacity>



        </View>

        <View style={styles.iconsMiddle}>
          <View style={styles.icon}>
            <Image source={require('../data/Images/Gallery.png')}

              style={{
                width: 90,
                height: 90,
                marginBottom: 20,
                marginTop: 20,

                borderRadius: 100,
                alignSelf: "center"
              }} />
            <Text style={{ color: "#fdd835", marginTop: 5, marginBottom: 10, marginLeft: 15, fontWeight: "bold", fontSize: 18 }}> Memories </Text>
          </View>

          <TouchableOpacity onPress={onPress4}>
            <View style={styles.icon}>
              <Image source={require('../data/Images/Schedule.png')}

                style={{
                  width: 90,
                  height: 90,
                  marginBottom: 20,
                  marginTop: 20,
                  borderRadius: 100,
                  alignSelf: "center"
                }} />
              <Text style={{ color: "#FF0000", marginTop: 5, marginBottom: 10, marginLeft: 20, fontWeight: "bold", fontSize: 18 }}>Schedule </Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.iconsDown}>


          <TouchableOpacity onPress={onPress5}>

            <View style={styles.icon}>
              <Image source={require('../data/Images/Games.png')}

                style={{
                  width: 90,
                  height: 90,
                  marginBottom: 20,
                  marginTop: 20,

                  borderRadius: 100,
                  alignSelf: "center"
                }} />
              <Text style={{ color: "#2196f3", marginTop: 5, marginBottom: 10, marginLeft: 25, fontWeight: "bold", fontSize: 18 }}> Games </Text>
            </View>
          </TouchableOpacity>




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
    backgroundColor: "transparent",


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
    width: "90%",
    justifyContent: "center",
    flexDirection: "row",
    marginRight: 40,
    //borderColor: "#3C99DC",
    //borderWidth: 5,
    backgroundColor: "rgba(17, 186, 165, 0.2 )",
    borderRadius: 30,
    marginTop: "5%",
    marginLeft: 20


  },
  profileT: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 30,
    fontSize: 28,
    color: "white",
    marginRight: 20,
    alignSelf: "center"


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
    height: 170,
    width: 180,
    //alignContent: "center",
    padding: 31,
    //paddingRight: 45,
    //borderColor: "#3C99DC",
    //borderWidth: 5,
    //backgroundColor: "#aed581",
    //backfaceVisibility: "visible",
    backgroundColor: "rgba(17, 186, 165, 0.1)",
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

  texts: {

  }



}

);