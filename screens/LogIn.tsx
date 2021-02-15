import React from "react-native";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export const LogIn = () => {
  return (
    <View style={styles.container}>
      <Text> LogIn Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
