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
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 20,

    justifyContent: "center",
    alignItems: "center"
  },
  tallerItem: {
    flex: 1,
    borderRadius: 10,
    width: 186.943,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    elevation: 0.5
  },
  title: {
    color: "white",
    backgroundColor: 'rgba(0,91,92,0.8)',
    padding: 6,
    fontFamily: "nunito-extra-bold",
    width: "100%",
    fontSize: 9,
  },
  bgImage: {
    height: 105.155,
    width: 186.943,
  },
  titleContainer: {
    position: "absolute",
    width: "100%",
    flexDirection: "column"
  }
});

export default ListaDeTalleres;
