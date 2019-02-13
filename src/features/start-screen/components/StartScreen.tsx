import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationEvents, NavigationInjectedProps } from 'react-navigation'

import { StateProps, DispatchProps } from '../containers/StartScreen'
import Button from '../../../components/button/Button'
import st from '../../../styles'
import NavigationOptions from '../../../constants/NavigationOptions'

export interface Props extends StateProps, DispatchProps, NavigationInjectedProps {}
export default class StartScreen extends React.Component<Props, object> {
  public static navigationOptions = NavigationOptions

  private didFocus = () => {
    const { userLogout } = this.props
    userLogout()
  }

  private navigateToSignUp = () => {
    const { navigation } = this.props
    navigation.navigate('GenderSelection')
  }

  public render(): JSX.Element {
    return (
      <View style={[st.flex.f1, st.flex.row, st.items.end, st.justify.center, st.bg.greyLightest]}>
        <NavigationEvents onDidFocus={this.didFocus} />
        <View style={[st.flex.f1, st.items.center, st.justify.center, st.m.b10]}>
          <Button title="Create Account" variant="primary-lg" onPress={this.navigateToSignUp} />
          <Button title="Log In" variant="secondary-lg" onPress={() => {}} />
        </View>
      </View>
    )
  }
}
