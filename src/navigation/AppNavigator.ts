import { createStackNavigator, createAppContainer, NavigationContainer } from 'react-navigation'
import StartScreen from '../features/start-screen/containers/StartScreen'
import SignUpRoutes from './SignUpRoutes'
import NavigationOptions from '../constants/NavigationOptions'

const AppNavigator: NavigationContainer = createStackNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: () => NavigationOptions,
    },
    ...SignUpRoutes,
  },
  {
    // initialRouteName: 'Start',
    initialRouteName: 'GenderSelection',
    cardShadowEnabled: false,
  }
)

export default createAppContainer(AppNavigator)
