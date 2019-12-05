import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, CreateDrawerNavigator } from "react-navigation";
import Home from "../screens/Home";
import Talleres from "../screens/Talleres";
import TallerDetalle from "../screens/TallerDetalle";
import MapaDeEmergencia from "../screens/MapaDeEmergencia";
import SecretariaDeGenero from "../screens/SecretariaDeGenero";
import DOE from "../screens/DOE";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Genero: SecretariaDeGenero,
    Talleres: Talleres,
    TallerDetalle: TallerDetalle,
    MapaDeEmergencia: MapaDeEmergencia,
    DOE: DOE,
    SecretariaDeGenero: SecretariaDeGenero
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  }
);
const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: AppNavigator, navigationOptions: { drawerLabel: "Home" } },
    MapaDeEmergencia: {
      screen: MapaDeEmergencia,
      navigationOptions: { drawerLabel: "Mapa de emergencia" }
    },
    Talleres: {
      screen: Talleres,
      navigationOptions: { drawerLabel: "Talleres" }
    },
    SecretariaDeGenero: {
      screen: SecretariaDeGenero,
      navigationOptions: { drawerLabel: "Secretaria de Genero" }
    },
    DOE: {
      screen: DOE,
      navigationOptions: {
        drawerLabel: "Dirección de orientación al estudiante"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  },
  {
    contentOptions: {
      activeTintColor: Colors.primaryColor,
    }
  }
);

export default createAppContainer(MainNavigator);
