import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Brian!";

  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text style={styles.textStyle}>Getting started with RN</Text>
      <Text>My namre is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  secondTextStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
