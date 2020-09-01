import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import AboutScreen from './src/screens/AboutScreen'
import DeveloperScreen from './src/screens/DeveloperScreen'
import ContactScreen from './src/screens/ContactScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Developer: DeveloperScreen,
    Contact: ContactScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Robyn Bursnell - The App'
    }
  }
)

export default createAppContainer(navigator)
