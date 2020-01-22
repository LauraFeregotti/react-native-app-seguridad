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
import MyCarousel from "../components/carousel";

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
    <View style={styles.screen}>
      <MyCarousel style={styles.carousel} navigation={props.navigation} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={1}
      />
    </View>
  );
};
Talleres.navigationOptions = {
  headerTitle: "Talleres",
  headerTitleStyle: {
    fontFamily: "open-sans-extrabold"
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    
  }
  
});

export default Talleres;
