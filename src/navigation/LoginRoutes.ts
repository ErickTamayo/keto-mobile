import NavigationOptions from '../constants/NavigationOptions'
import Login from '../features/login/components/Login'

const loginRoutes = {
  Login: {
    screen: Login,
    navigationOptions: () => NavigationOptions,
  },
}

export default loginRoutes
