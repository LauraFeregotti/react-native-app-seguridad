import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";
import Colors from "../constants/Colors";

const ListaDeTalleres = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={styles.tallerItem}>
        <ImageBackground source={{uri: props.image}}  style={styles.bgImage} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.individualTextContainer}>
          <Text style={styles.tipo} numberOfLines={2}>
            {props.tipo}
          </Text>
        </View>
        <View style={styles.individualTextContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
        <View style={styles.subtitle}>
        <View style={styles.fechayhorariocontainer}>
          <Text style={styles.fecha} numberOfLines={2}>
            {props.fecha}
          </Text>
          <Text style={styles.horario} numberOfLines={2}>
            {props.horario}
          </Text>
        </View>
        <View style={styles.individualTextContainer}>
          <Text style={styles.lugar} numberOfLines={2}>
            {props.lugar}
          </Text>
        </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fechayhorariocontainer:{
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 10
  },
  gridItem: {
    flex: 1,
    margin: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  tallerItem: {
    borderRadius: 10,
    width: 186.943,
    elevation: 0.5,
    margin: 10,
    borderRadius: 17,
  },
  title: {
    color: "#005B5C",
    padding: 4,
    fontFamily: "open-sans-semibold",
    fontSize: 18
  },
  fecha: {
    color: "#787878",
    padding: 4,
    fontFamily: "open-sans-semibold",
    
    fontSize: 9
  },
  horario: {
    color: "#787878",
    padding: 4,
    fontFamily: "open-sans-semibold",
    fontSize: 9
  },
  hora: {
    color: "#787878",
    padding: 4,
    fontFamily: "open-sans-semibold",
    fontSize: 9
  },
  lugar: {
    color: "#787878",
    padding: 2,
    fontFamily: "open-sans-semibold",
    fontSize: 9
  },
  tipo: {
    color: "#787878",
    padding: 2,
    fontFamily: "open-sans-semibold",
    fontSize: 8
  },
  bgImage: {
    height: 105.155,
    width: 186.943,
  },
  subtitle: {
   
  }
});

export default ListaDeTalleres;
