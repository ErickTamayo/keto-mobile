import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  NavigationContainer,
} from 'react-navigation'
import Modal from '../components/modal/Modal'
import AuthStack from './AuthStack'
import AppStack from './AppStack'

const appNavigator = createSwitchNavigator(
  {
    // TODO: Create a screen to detect if the user is logged in
    // then redirect to Auth/App
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
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
