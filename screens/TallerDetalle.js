import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../Data/Dummy-data";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

const { width: screenWidth } = Dimensions.get("window");

const TallerDetalle = props => {
  const direccionarplanilla = () => {
    console.log("aca se direcciona a la plantilla de google");
  };
  const tallerId = props.navigation.getParam("tallerId");
  const tallerSeleccionado = CATEGORIES.find(taller => taller.id === tallerId);
  return (
    <ScrollView style={styles.screen}>
      <ImageBackground
        source={{ uri: tallerSeleccionado.imageUrl }}
        style={styles.bgImage}
      />

      <View style={styles.container}>
        <Text style={styles.tipo}>{tallerSeleccionado.tipo}</Text>
        <Text style={styles.title}>{tallerSeleccionado.title}</Text>
        <Text style={styles.area}>{tallerSeleccionado.area}</Text>
        <Text style={styles.descripcion}>{tallerSeleccionado.descripcion}</Text>
        <View style={styles.fechacontainer}>
          <Image
            style={styles.logo}
            source={require("../assets/iconos/calendar.png")}
          ></Image>
          <View style={styles.fechahora}>
            <Text style={styles.fecha}>{tallerSeleccionado.fecha}</Text>
            <Text style={styles.horario}>{tallerSeleccionado.horario}</Text>
          </View>
        </View>
        <View style={styles.ubicacioncontainer}>
          <Image
            style={styles.logo2}
            source={require("../assets/iconos/lugar.png")}
          ></Image>
          <Text style={styles.lugar}>{tallerSeleccionado.lugar}</Text>
        </View>
        <View style={styles.lineahorizontal} />
        <View style={styles.inscribirmecontainer}>
          <TouchableOpacity
            style={styles.inscribirmeButton}
            onPress={() => {
              direccionarplanilla();
            }}
          >
            <Text style={styles.inscribirmetext}>Inscribirme</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  logo: {
    width: 16,
    height: 16
  },
  screen: {
    flex: 1,
    
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    borderRadius: 17,
    elevation: 0.5,
    paddingBottom: 20,
   
    backgroundColor: "white",

  },
  contenedorFechaHorario: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 18,
    marginRight: 18,
    fontSize: 8
  },
  fecha: {
    fontSize: 10,
    flex: 1,
    color: "#686C6A",
    fontFamily: "open-sans-regular",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5
  },
  horario: {
    fontSize: 10,
    flex: 1,
    color: "#686C6A",
    fontFamily: "open-sans-regular",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5
  },
  descripcion: {
    fontSize: 10,
    color: "#686C6A",
    fontFamily: "open-sans-regular",
    marginLeft: 20,
    marginRight: 20
  },
  bgImage: {
    width: screenWidth,
    height: screenWidth / 2,
    position: "relative"
  },
  title: {
    fontFamily: "open-sans-extrabold",
    color: Colors.primaryColor,
    width: "100%",
    fontSize: 22,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5
  },
  tipo: {
    fontFamily: "open-sans-bold",
    color: "#686C6A",
    width: "100%",
    fontSize: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 5
  },
  fechacontainer: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    marginBottom: 5,
    marginTop: 20,
    padding: 5
  },
  area: {
    fontFamily: "open-sans-bold",
    color: "#686C6A",
    width: "100%",
    fontSize: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 20
  },
  ubicacioncontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,
    marginTop: 5,
    padding: 5
  },
  fechahora: {
    flex: 1,
    flexDirection: "column"
  },
  lugar: {
    fontSize: 10,
    flex: 1,
    color: "#686C6A",
    fontFamily: "open-sans-regular",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5
  },
  logo: {
    marginTop: 10
  },
  lineahorizontal: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  inscribirmecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    margin: 20,
    marginTop: 10
  },
  inscribirmetext: {
    color: "white",
    fontSize: 13,
    fontFamily: "open-sans-semibold"
  },
  inscribirmeButton: {
    borderRadius: 30,
    width: "100%",
    backgroundColor: "#005B5C",
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TallerDetalle;
