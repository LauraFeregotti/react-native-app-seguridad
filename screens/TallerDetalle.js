import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions
} from "react-native";
import { CATEGORIES } from "../Data/Dummy-data";
import Colors from "../constants/Colors";

const { width: screenWidth } = Dimensions.get("window");

const TallerDetalle = props => {
  const tallerId = props.navigation.getParam("tallerId");
  const tallerSeleccionado = CATEGORIES.find(taller => taller.id === tallerId);
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: tallerSeleccionado.imageUrl }}
          style={styles.bgImage}
        />

        <Text style={styles.title}>{tallerSeleccionado.title}</Text>

        <View style={styles.contenedorFechaHorario}>
          <Text style={styles.fecha}> Fecha: {tallerSeleccionado.fecha} </Text>
          <Text style={styles.horario}>Hora: {tallerSeleccionado.horario}</Text>
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
    justifyContent: "flex-start",
    margin: 10,
    borderRadius: 10,
    elevation: 0.5
  },

  contenedorFechaHorario: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 18,
    marginRight: 18,
    fontSize: 8
  },
  fecha: {
    fontSize: 12,
    flex: 1,
    color: Colors.primaryColor,
    fontFamily: "nunito-light"
  },
  horario: {
    fontSize: 12,
    flex: 1,
    color: Colors.primaryColor,
    fontFamily: "nunito-light"
  },
  descripcion: {
    fontSize: 13,
    color: Colors.primaryColor,
    fontFamily: "nunito-light",
    margin: 18
  },
  bgImage: {
    width: screenWidth - 40,
    height: screenWidth / 2,
    padding: 10,
    margin: 10
  },

  title: {
    fontFamily: "nunito-extra-bold",
    color: Colors.primaryColor,
    width: "100%",
    fontSize: 16,
    margin: 18
  }
});

export default TallerDetalle;
