import { createStackNavigator, NavigationContainer } from 'react-navigation'
import NavigationOptions from '../constants/NavigationOptions'

import StartScreen from '../features/start-screen/components/StartScreen'

import Login from '../features/login/components/Login'
import AccountRecovery from '../features/login/components/AccountRecovery'

import GenderSelection from '../features/sign-up/components/GenderSelection'
import OtherParameters from '../features/sign-up/components/OtherParameters'
import AccountCreation from '../features/sign-up/components/AccountCreation'

const AuthStack: NavigationContainer = createStackNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: () => NavigationOptions,
    },
    Login: {
      screen: Login,
      navigationOptions: () => NavigationOptions,
    },
    AccountRecovery: {
      screen: AccountRecovery,
      navigationOptions: () => NavigationOptions,
    },
    GenderSelection: {
      screen: GenderSelection,
      navigationOptions: () => NavigationOptions,
    },
    OtherParameters: {
      screen: OtherParameters,
      navigationOptions: () => NavigationOptions,
    },
    AccountCreation: {
      screen: AccountCreation,
      navigationOptions: () => NavigationOptions,
    },
  },
  {
    initialRouteName: 'Start',

    // initialRouteName: 'GenderSelection',
    // initialRouteName: 'OtherParameters',
    // initialRouteName: 'AccountCreation',

    // initialRouteName: 'Login',
    // initialRouteName: 'AccountRecovery',

    cardShadowEnabled: false,
  }
)

export default AuthStack
