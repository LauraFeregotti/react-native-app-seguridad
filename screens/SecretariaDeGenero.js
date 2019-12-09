import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SecretariaDeGenero = props => {
     return (
        <View style={styles.screen}>
            <Text>
            informacion util genero
            </Text>
    </View>
    );
};
SecretariaDeGenero.navigationOptions = {
  headerTitle: "Secretaria de Genero",
  headerTitleStyle: {
    fontFamily: 'nunito-light'
  },
};


const styles = StyleSheet.create({
    screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SecretariaDeGenero;
