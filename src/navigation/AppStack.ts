import { createStackNavigator, NavigationContainer } from 'react-navigation'
import NavigationOptions from '../constants/NavigationOptions'
import Settings from '../features/settings/components/Settings'

//TODO: change this to a SwitchNavigator
const AppStack: NavigationContainer = createStackNavigator(
  {
    Settings: {
      screen: Settings,
      navigationOptions: () => NavigationOptions,
    },
  },
  {
    initialRouteName: 'Settings',
    cardShadowEnabled: false,
  }
)

export default AppStack
