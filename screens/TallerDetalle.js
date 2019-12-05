import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { CATEGORIES } from "../Data/Dummy-data";
import Colors from "../constants/Colors";

const TallerDetalle = props => {
  const tallerId = props.navigation.getParam("tallerId");
  const tallerSeleccionado = CATEGORIES.find(taller => taller.id === tallerId);
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: tallerSeleccionado.image }}
          style={styles.bgImage}
        />
        <Text style={styles.title}>{tallerSeleccionado.title}</Text>
        <View style={styles.contenedorFechaHorario}>
          <Text style={styles.fecha}>{tallerSeleccionado.fecha} </Text>
          <Text style={styles.horario}>{tallerSeleccionado.horario}</Text>
        </View>

        <Text style={styles.descripcion}>{tallerSeleccionado.descripcion}</Text>
      </View>
    </View>
  );
};
TallerDetalle.navigationOptions = navigationData => {
  console.log(navigationData);
  const tallerId = navigationData.navigation.getParam("tallerId");
  const tallerSeleccionado = CATEGORIES.find(taller => taller.id === tallerId);
  return {
    headerTitle: tallerSeleccionado.title
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    margin: 20,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    elevation: 3
  },
  title: {
    fontFamily: "nunito-extra-bold",
    fontSize: 20,
    color: "white"
  },
  contenedorFechaHorario: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  fecha: {
    fontSize: 12,
    flex: 1
  },
  horario: {
    fontSize: 12,
    flex: 1
  },
  descripcion: {
    fontSize: 13
  },
  bgImage: {
    width: 100,
    height: 100
  }
});

export default TallerDetalle;
