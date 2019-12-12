import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MapaDeEmergencia = props => {
     return (
        <View style={styles.screen}>
            <Text style={styles.texto}>
             Mapa de Emergencia
            </Text>
    </View>
    );
};
MapaDeEmergencia.navigationOptions = {
  headerTitle: "Mapa de emergencia",

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  texto: {
      color: "#005b5c",
      marginLeft: 25,
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: "roboto"
    }
});

export default MapaDeEmergencia;
