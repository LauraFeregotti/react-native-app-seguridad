import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MapaDeEmergencia = props => {
     return (
        <View style={styles.screen}>
            <Text>
             Mapa de Emergencia
            </Text>
    </View>
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

export default MapaDeEmergencia;
