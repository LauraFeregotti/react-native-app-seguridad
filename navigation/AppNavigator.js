import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import InformacionUtilGenero from "../screens/InformacionUtilGenero"; 
import Home from "../screens/Home";
import Talleres from "../screens/Talleres";

const AppNavigator = createStackNavigator({
    Home: Home,
    Genero: InformacionUtilGenero,
    Talleres: Talleres,
  
  });

  export default createAppContainer(AppNavigator);