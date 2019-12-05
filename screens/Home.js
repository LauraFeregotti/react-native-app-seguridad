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
        <MyCarousel style={styles.carousel} />
        <View style={styles.sipemContainer}>
          <TouchableOpacity
            style={styles.sipemButton}
            onPress={() => {
              makeCall(sipem);
            }}
          >
            <Image
              style={styles.cross}
              source={require("../assets/emergencia-sipem-icono.png")}
            ></Image>
            <Text style={styles.textSipem}>SIPEM</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerSubtitulo}>
          <Text style={styles.subtitulo}>Emergencias y urgencias médicas</Text>
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
  subtitulo: {
    color: "#878686",
    fontSize: 13,
    marginTop: 5
  },
  containerSubtitulo: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  cross: {
    width: 55,
    height: 55,
    marginRight: 25
  },
  textSipem: {
    color: "#005b5c",
    marginLeft: 25,
    fontSize: 20
  },
  bomberosButton: {
    flex: 1,
    borderRadius: 400,
    backgroundColor: "#005b5c",
    marginLeft:30,
    marginRight:10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    
  },
  policiaButton: {
    flex: 1,
    borderRadius: 400,
    backgroundColor: "#005b5c",
    marginRight:30,
    marginLeft:10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    
  },
  text: {
    color: "white",
    fontSize: 14,
  },
  sipemButton: {
    borderRadius: 25,
    borderWidth: 2.5,
    borderColor: "#005b5c",
    backgroundColor: "white",
    padding: 16,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
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
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  sipemContainer: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25
  },
  button: {
    width: 150,
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
    width: 148,
    height: 60.688,
    margin: 20,
    padding: 5
  }
});

export default Home;
