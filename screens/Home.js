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
        <Button
          title="Secretaria de Genero"
          onPress={() => {
            props.navigation.navigate({ routeName: "Genero" });
          }}
        />
      </View>
      <View style={styles.talleres}>
        <Button
          title="talleres"
          onPress={() => {
            props.navigation.navigate({ routeName: "Talleres" });
          }}
        />
      </View>
    </View>
  );
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
    width: "100%"
  },
  talleres: {
    paddingTop: 10,
    width: "100%"
  }
});

export default Home;
