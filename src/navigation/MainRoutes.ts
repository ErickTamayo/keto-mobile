import NavigationOptions from '../constants/NavigationOptions'
import Settings from '../features/settings/components/Settings'

const mainRoutes = {
  Settings: {
    screen: Settings,
    navigationOptions: () => NavigationOptions,
  },
}

export default mainRoutes
