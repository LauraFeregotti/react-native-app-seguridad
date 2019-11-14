import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../Data/Dummy-data";
import Constant from "../constants/Colors";
import Colors from "../constants/Colors";
import ListaDeTalleres from "../components/ListaDeTalleres";

const Talleres = props => {
  const renderGridItem = itemData => {
    return (
      <ListaDeTalleres
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "TallerDetalle",
            params: {
              tallerId: itemData.item.id
            }
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};
Talleres.navigationOptions = {
  headerTitle: "Talleres"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Talleres;
