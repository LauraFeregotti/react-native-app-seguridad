import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  Platform
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtons";
import { Colors } from "react-native-paper";
import MyCarousel from "../components/carousel";

const Home = props => {
  const sipem = 4531419;
  const policia = 911;
  const bomberos = 100;

  makeCall = number => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };
  return (
    <View style={styles.screen}>
      <MyCarousel />
      <View style={styles.sipem}>
        <Button
          title="SIPEM"
          onPress={() => {
            makeCall(sipem);
          }}
          color="#7c96bf"
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Policia"
            onPress={() => {
              makeCall(policia);
            }}
            color="#7c96bf"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Bomberos"
            onPress={() => {
              makeCall(bomberos);
            }}
            color="#7c96bf"
          />
        </View>
      </View>
      <View style={styles.secretariaGenero}>
        <Text>Secretaria de Género</Text>
        <Text>Mail de la secretaría</Text>
      </View>
    </View>
  );
};
Home.navigationOptions = navData => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};
const styles = StyleSheet.create({
  screen: {
    width: "100%",
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 20,
    justifyContent: "space-between"
  },

  sipem: {
    width: "100%"
  },
  button: {
    width: 150
  },
  secretariaGenero: {
    width: "100%",
    backgroundColor: "#7c96bf",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    color: "white"
  },
  talleres: {
    paddingTop: 10,
    width: "100%"
  }
});

export default Home;
