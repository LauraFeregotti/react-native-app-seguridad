import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import { useScreens } from "react-native-screens";
import { Provider as PaperProvider } from "react-native-paper";

useScreens();

const fetchFonts = () => {
 return Font.loadAsync({
    "nunito-extra-bold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
    "nunito-light": require("./assets/fonts/Nunito-Light.ttf"),
    "roboto": require("./assets/fonts/Roboto-Regular.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontloaded] = useState(false);

  if (!fontLoaded) {
    return (
      <PaperProvider>
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setFontloaded(true)}
         
        />
      </PaperProvider>
    );
  }
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
