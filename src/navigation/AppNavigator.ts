import { createStackNavigator, createAppContainer, NavigationContainer } from 'react-navigation'
import StartScreen from '../features/start-screen/containers/StartScreen'
import SecondScreen from '../features/second-screen/components/SecondScreen'

const AppNavigator: NavigationContainer = createStackNavigator(
  {
    Start: {
      screen: StartScreen,
    },
    SignUp: {
      screen: SecondScreen,
    },
  },
  {
    initialRouteName: 'Start',
    cardShadowEnabled: false,
  }
)

export default createAppContainer(AppNavigator)
