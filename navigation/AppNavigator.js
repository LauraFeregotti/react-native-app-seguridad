import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import InformacionUtilGenero from "../screens/InformacionUtilGenero";
import Home from "../screens/Home";
import Talleres from "../screens/Talleres";
import TallerDetalle from "../screens/TallerDetalle";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Genero: InformacionUtilGenero,
    Talleres: {
      screen: Talleres,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.primaryColor
      }
    },
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

export default createAppContainer(AppNavigator);
