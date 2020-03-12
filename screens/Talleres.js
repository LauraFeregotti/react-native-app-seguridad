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
        tipo={itemData.item.tipo}
        fecha={itemData.item.fecha}
        horario={itemData.item.horario}
        lugar={itemData.item.lugar}
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
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={1}
        style={styles.flatList}
      />
      <View style={styles.carouselcontainer}>
        <MyCarousel style={styles.carousel} navigation={props.navigation} />
      </View>
    </View>
  );
};
Talleres.navigationOptions = {
  headerTitle: "Cursos y Talleres",
  headerTitleStyle: {
    fontFamily: "open-sans-extrabold"
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#005B5C"
  },
  flatList: {
    backgroundColor: "white",
    marginTop: 180,
    borderRadius: 17,
   
    paddingTop: 100,
    paddingBottom: 40
  },
  carousel: {
    paddingTop: 60,
    position: "absolute",
    flexDirection: "column",
  },
  carouselcontainer: {
    position: "absolute",
    flex: 1,
    flexDirection: "column",
    marginTop: 15,
    marginBottom: 60,
    height: 250,
    width: 100,
   
  }
});

export default Talleres;
