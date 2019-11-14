import React from "react";
import { StyleSheet, Text, View } from "react-native";

const InformacionUtilGenero = props => {
     return (
        <View style={styles.screen}>
            <Text>
            informacion util genero
            </Text>
    </View>
    );
};
InformacionUtilGenero.navigationOptions = {
  headerTitle: "InformacionUtilGenero",
 
};


const styles = StyleSheet.create({
    screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default InformacionUtilGenero;
