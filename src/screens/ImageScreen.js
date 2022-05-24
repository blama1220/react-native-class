import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageScore="3.5/5"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Candy"
        imageScore="5/5"
        imageSource={require("../../assets/candy.jpg")}
      />
      <ImageDetail
        title="Cat"
        imageScore="3/5"
        imageSource={require("../../assets/cat.jpg")}
      />
      <ImageDetail
        title="Beach"
        imageScore="1/5"
        imageSource={require("../../assets/beach.jpg")}
      />

      <ImageDetail
        title="Beach"
        imageScore="4/5"
        imageSource={require("../../assets/beach.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
