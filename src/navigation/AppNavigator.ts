import { createStackNavigator, createAppContainer, NavigationContainer } from 'react-navigation'
import StartScreen from '../features/start-screen/components/StartScreen'
import SignUpRoutes from './SignUpRoutes'
import LoginRoutes from './LoginRoutes'
import MainRoutes from './MainRoutes'
import NavigationOptions from '../constants/NavigationOptions'
import Modal from '../components/modal/Modal'

const appNavigator: NavigationContainer = createStackNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: () => NavigationOptions,
    },
    ...SignUpRoutes,
    ...LoginRoutes,
    ...MainRoutes,
  },
  {
    // initialRouteName: 'Start',

    // initialRouteName: 'GenderSelection',
    // initialRouteName: 'OtherParameters',
    initialRouteName: 'AccountCreation',

    // initialRouteName: 'Login',
    // initialRouteName: 'AccountRecovery',

    cardShadowEnabled: false,
  }
)

const rootNavigator: NavigationContainer = createStackNavigator(
  {
    Main: {
      screen: appNavigator,
    },
    Modal: {
      screen: Modal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
      containerStyle: {
        backgroundColor: 'transparent',
      },
    }),
  }
)

export default createAppContainer(rootNavigator)
