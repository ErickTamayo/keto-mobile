import NavigationOptions from '../constants/NavigationOptions'
import GenderSelection from '../features/sign-up/components/GenderSelection'
import OtherParameters from '../features/sign-up/components/OtherParameters'
import AccountCreation from '../features/sign-up/components/AccountCreation'

const signUpRoutes = {
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
}

export default signUpRoutes
