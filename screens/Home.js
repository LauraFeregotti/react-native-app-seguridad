import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Home = props => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <View style={styles.sipem}>
        <Button title="SIPEM" />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Policia" />
        </View>
        <View style={styles.button}>
          <Button title="Bomberos" />
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
  secretariaGenero:{
    width: "100%"
  }
});

export default Home;
