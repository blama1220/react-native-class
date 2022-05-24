import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const series = [
    { name: "1996", category: "Horror" },
    { name: "Miau", category: "Comedy" },
    { name: "Ops", category: "IDK" },
    { name: "CoD", category: "Action" },
    { name: "Next", category: "Suspense" },
    { name: "SThings", category: "Horror" },
    { name: "Lollipop", category: "Sex" },
    { name: "Rex", category: "Action" },
  ];

  return (
    <FlatList
      horizontal={false}
      showsVerticalScrollIndicator={true}
      keyExtractor={(friend) => friend.name}
      data={series}
      renderItem={({ item }) => {
        return (
          <Text style={styles.testStyle}>
            {item.name} - {item.category}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  testStyle: { marginVertical: 20, marginLeft: 10 },
});

export default ListScreen;
