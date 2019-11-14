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
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButtons";
import { Colors } from "react-native-paper";

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
      <View style={styles.sipem}>
        <Button
          title="SIPEM"
          onPress={() => {
            makeCall(sipem);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Policia"
            onPress={() => {
              makeCall(policia);
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Bomberos"
            onPress={() => {
              makeCall(bomberos);
            }}
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
      headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Menu" iconName="ios-menu" onPress={()=>{
      navData.navigation.toggleDrawer();}} ></Item>
  </HeaderButtons>
  }

};

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
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
    backgroundColor: Colors.primaryColor,
  },
  talleres: {
    paddingTop: 10,
    width: "100%"
  }
});

export default Home;
