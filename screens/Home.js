import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtons";
import { Colors } from "react-native-paper";
import MyCarousel from "../components/carousel";
import Header from "../components/Header";
import { CATEGORIES } from "../Data/Dummy-data";

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
      source={require("../assets/background2.png")}
    >
      <View style={styles.screen2}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>
        <MyCarousel style={styles.carousel} navigation={props.navigation} />
        <View style={styles.sipemContainer}>
          <TouchableOpacity
            style={styles.sipemButton}
            onPress={() => {
              makeCall(sipem);
            }}
          >
            <Image
              style={styles.cross}
              source={require("../assets/cross.png")}
            ></Image>
            <View style={styles.sipemtextcontainer}>
              <Text style={styles.textllamara}>LLAMAR A</Text>
              <Text style={styles.textSipem}>SIPEM</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerSubtitulo}>
          <Text style={styles.subtitulo}>Emergencias médicas</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.bomberosButton}
              onPress={() => {
                makeCall(bomberos);
              }}
            >
              <Text style={styles.text}>Bomberos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.policiaButton}
              onPress={() => {
                makeCall(policia);
              }}
            >
              <Text style={styles.text}>Policia</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
Home.navigationOptions = navData => {
  return {
    headerTitle: (
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", padding: 30, }}>
        <Image
          source={require("../assets/logofacu.png")}
          style={{ width: 95, height: 28.068, }}
        />
      </View>
    ),
   headerLeft: (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          ></Item>
        </HeaderButtons>
      </View>
    ),
    headerRight: <View style={{ flex: 1, flexDirection: "row" }}></View>
  };
};
const styles = StyleSheet.create({
  textllamara: {
    color: "white",
    fontSize: 19,
    marginBottom: -7,
    fontFamily: "open-sans-extrabold",
  },
  textSipem: {
    margin: 0,
    color: "white",
    fontSize: 30,
    fontFamily: "open-sans-extrabold"
  },
  sipemtextcontainer: {
    flexDirection: "column"
  },
  subtitulo: {
    color: "#777777",
    fontSize: 13,
    marginTop: 5,
    fontFamily: "open-sans-bold"
  },
  containerSubtitulo: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  cross: {
    width: 60,
    height: 60,
    marginRight: 25
  },
  bomberosButton: {
    flex: 1,
    borderRadius: 400,
    backgroundColor: "#005B5C",
    marginLeft: 32,
    marginRight: 12,
    padding: 23,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "open-sans-semibold"
  },
  policiaButton: {
    flex: 1,
    borderRadius: 400,
    backgroundColor: "#005B5C",
    marginRight: 32,
    marginLeft: 12,
    padding: 23,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "open-sans-semibold"
  },
  text: {
    color: "white",
    fontSize: 15,
    fontFamily: "open-sans-semibold"
  },
  sipemButton: {
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 0.1,
    backgroundColor: "#005B5C",
    padding: 16,
    width: "71%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  background: {
    flex: 1,
    resizeMode: "cover"
  },
  screen2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  screen: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 18,
    justifyContent: "center",
    alignItems: "center"
  },
  sipemContainer: {
    width: "98%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
  },
  button: {
    width: 175,
    borderRadius: 20
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
    paddingBottom: 10,
    width: "100%",
    height: "100%"
  },
  logo: {
    width: 139.413,
    height: 49,
    margin: 20,
    padding: 5
  },
  carousel:{
 
  }
});

export default Home;
