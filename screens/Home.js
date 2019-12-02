import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  Platform,
  Image,
  ImageBackground
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtons";
import { Colors } from "react-native-paper";
import MyCarousel from "../components/carousel";
import Header from "../components/Header";

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
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
      imageStyle={{ opacity: 0.1 }}
    >
      <View style={styles.screen2}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <MyCarousel />
        <View style={styles.sipem}>
          <Button
            title="SIPEM"
            onPress={() => {
              makeCall(sipem);
            }}
            color="#005b5c"
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Policia"
              onPress={() => {
                makeCall(policia);
              }}
              color="#005b5c"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Bomberos"
              onPress={() => {
                makeCall(bomberos);
              }}
              color="#005b5c"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
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
  background: {
    flex: 1,
    resizeMode: "cover"
  },
  screen2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  screen: {
    width: "100%",
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
  },
  logo: {
    width: 148,
    height: 58.281,
    margin: 20
  }
});

export default Home;
