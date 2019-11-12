import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import InformacionUtilGenero from "../screens/InformacionUtilGenero"; 
import Home from "../screens/Home";

const AppNavigator = createStackNavigator({
    Home: Home,
    Genero: InformacionUtilGenero,
  
  });

  export default createAppContainer(AppNavigator);