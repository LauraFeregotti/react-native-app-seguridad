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
      </View>
      <View style={styles.titleContainer}>
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
    margin: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  tallerItem: {
    borderRadius: 10,
    width: 186.943,
    elevation: 0.5,
    margin: 10
  },
  title: {
    color: "#005B5C",
    padding: 6,
    fontFamily: "open-sans-semibold",
    width: "100%",
    fontSize: 9
  },
  bgImage: {
    height: 105.155,
    width: 186.943
  },
  titleContainer: {
    margin: 10
  }
});

export default ListaDeTalleres;
