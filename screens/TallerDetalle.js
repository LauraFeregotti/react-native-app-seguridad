import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../Data/Dummy-data";
import Colors from "../constants/Colors";

const TallerDetalle = props => {
  const tallerId = props.navigation.getParam("tallerId");
  const tallerSeleccionado = CATEGORIES.find(taller => taller.id === tallerId);
  return (
    <View style={styles.screen}>
      <Text>{tallerSeleccionado.title}</Text>
    </View>
  );
};
TallerDetalle.navigationOptions = navigationData => {
  const tallerId = navigationData.navigation.getParam("tallerId");
  const tallerSeleccionado = CATEGORIES.find(taller => taller.id === tallerId);
  return {
    headerTitle: tallerSeleccionado.title,
    
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TallerDetalle;
