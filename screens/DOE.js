import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DOE = props => {
  return (
    <View style={styles.screen}>
      <Text>Dirección de orientación al estudiante</Text>
    </View>
  );
};
DOE.navigationOptions = {
  headerTitle: "DOE"
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DOE;
