import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../Data/Dummy-data";
import Constant from "../constants/Colors"
import Colors from "../constants/Colors";

const Talleres = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({ routeName: "TallerDetalle", params:{
              tallerId: itemData.item.id 
          } });
        }}
      >
        <View>
          <Text>{itemData.item.title} </Text>
        </View>
      </TouchableOpacity>
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
    headerTitle: "Talleres",
   
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default Talleres;
