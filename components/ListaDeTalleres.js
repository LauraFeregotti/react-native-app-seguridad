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
    margin: 15,
    height: 150,
    elevation: 3,
  },
  tallerItem: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 12
  },
  bgImage: {
    height: 100,
    width: 100
  }
});

export default ListaDeTalleres;
