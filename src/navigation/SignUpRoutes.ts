import GenderSelection from '../features/sign-up/containers/GenderSelection'
import OtherParameters from '../features/sign-up/components/OtherParameters'
import NavigationOptions from '../constants/NavigationOptions'

const signUpRoutes = {
  GenderSelection: {
    screen: GenderSelection,
    navigationOptions: () => NavigationOptions,
  },
  OtherParameters: {
    screen: OtherParameters,
    navigationOptions: () => NavigationOptions,
  },
}

export default signUpRoutes
