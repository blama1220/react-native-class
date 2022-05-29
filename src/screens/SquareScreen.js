import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  useState();

  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Green" />
      <ColorCounter color="Blue" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
