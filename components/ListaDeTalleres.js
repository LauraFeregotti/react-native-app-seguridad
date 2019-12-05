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
        <ImageBackground source={{ uri: props.image }} style={styles.bgImage} />
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height:138.623,
    width: 246.44,
    elevation: 3,
  },
  tallerItem: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "nunito-extra-bold",
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
  bgImage: {
    height: 86.859,
    width: 154.417,
    padding: 5,
  }
});

export default ListaDeTalleres;
