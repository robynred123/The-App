import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
//import AboutScreen from "./src/screens/AboutScreen";
//import DeveloperScreen from "./src/screens/DeveloperScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    //About: AboutScreen,
    //Developer: DeveloperScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Robyn Bursnell"
    }
  }
);

export default createAppContainer(navigator);
