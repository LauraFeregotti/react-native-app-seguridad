import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../Data/Dummy-data";

const renderGridItem = itemData => {
  return (
    <View>
      <Text>{itemData.item.title} </Text>
    </View>
  );
};
const Talleres = props => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Talleres;
