import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, CreateDrawerNavigator } from "react-navigation";
import Home from "../screens/Home";
import Talleres from "../screens/Talleres";
import TallerDetalle from "../screens/TallerDetalle";
import MapaDeEmergencia from "../screens/MapaDeEmergencia";
import SecretariaDeGenero from "../screens/SecretariaDeGenero";
import DOE from "../screens/DOE";
import Colors from "../constants/Colors";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import SafeAreaView from "react-native-safe-area-view";
import { Container, Content, Header, Left, Body, Icon } from "native-base";
import {DrawerNavigator} from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Genero: SecretariaDeGenero,
    Talleres: Talleres,
    TallerDetalle: TallerDetalle,
    MapaDeEmergencia: MapaDeEmergencia,
    DOE: DOE,
    SecretariaDeGenero: SecretariaDeGenero,
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold"
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans-bold"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  }
);
const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: AppNavigator, navigationOptions: { drawerLabel: "Home" } },
    SecretariaDeGenero: {
      screen: SecretariaDeGenero,
      navigationOptions: { drawerLabel: "Coordinación de políticas Genero" }
    },
    DOE: {
      screen: DOE,
      navigationOptions: {
        drawerLabel: "Dirección de orientación al estudiante (DOE)"
      }
    },
    MapaDeEmergencia: {
      screen: MapaDeEmergencia,
      navigationOptions: { drawerLabel: "Mapa de Emergencias" }
    },
    Talleres: {
      screen: Talleres,
      navigationOptions: { drawerLabel: "Cursos y Talleres" }
    }
  },
  {
    initialRouteName: "Home",
    /* contentComponent: CustomNavigator, */
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentOptions: {
      activeTintColor: "#E93F5D",
      inactiveTintColor: "black",
      labelStyle: {
        fontSize: 13,
        marginLeft: 15
      }
    }
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold"
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans-bold"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    },
    contentOptions: {
      activeTintColor: Colors.primaryColor,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);
const CustomNavigator = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
    <Text>hola</Text>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default createAppContainer(MainNavigator);
