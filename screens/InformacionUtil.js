import React from "react";
import { StyleSheet, Text, View } from "react-native";

const InformacionUtil = props => {
     return (
        <View style={styles.screen}>
            <Text>
             informacion util
            </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default InformacionUtil;
