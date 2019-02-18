import NavigationOptions from '../constants/NavigationOptions'
import Login from '../features/login/components/Login'
import AccountRecovery from '../features/login/components/AccountRecovery'

const loginRoutes = {
  Login: {
    screen: Login,
    navigationOptions: () => NavigationOptions,
  },
  AccountRecovery: {
    screen: AccountRecovery,
    navigationOptions: () => NavigationOptions,
  },
}

export default loginRoutes
