import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, CreateDrawerNavigator } from "react-navigation";
import Home from "../screens/Home";
import Talleres from "../screens/Talleres";
import TallerDetalle from "../screens/TallerDetalle";
import MapaDeEmergencia from "../screens/MapaDeEmergencia";
import InformacionUtil from "../screens/InformacionUtil";
import InformacionUtilGenero from "../screens/InformacionUtilGenero";
import DOE from "../screens/DOE";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Genero: InformacionUtilGenero,
    Talleres: Talleres,
    TallerDetalle: TallerDetalle
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
    Home: AppNavigator,
    MapaDeEmergencia: MapaDeEmergencia,
    InformacionUtil: InformacionUtil,
    DOE: DOE,
    InformacionUtilGenero: InformacionUtilGenero,
    Talleres: Talleres,
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

export default createAppContainer(MainNavigator);
