import React from 'react'
import { View } from 'react-native'
import { NavigationEvents, NavigationInjectedProps } from 'react-navigation'

import Button from '../../../components/button/Button'
import st from '../../../styles'
import NavigationOptions from '../../../constants/NavigationOptions'

export default class StartScreen extends React.Component<NavigationInjectedProps, object> {
  public static navigationOptions = NavigationOptions

  private handleDidFocus = () => {
    // Clear everything
  }

  private navigateToSignUp = () => {
    const { navigation } = this.props
    navigation.navigate('GenderSelection')
  }

  private navigateToLogin = () => {
    const { navigation } = this.props
    navigation.navigate('Login')
  }

  public render(): JSX.Element {
    return (
      <View style={[st.flex.f1, st.flex.row, st.items.end, st.justify.center, st.bg.greyLightest]}>
        <NavigationEvents onDidFocus={this.handleDidFocus} />
        <View style={[st.flex.f1, st.items.center, st.justify.center, st.m.b10]}>
          <Button title="Create Account" variant="primary-lg" onPress={this.navigateToSignUp} />
          <Button title="Log In" variant="secondary-lg" onPress={this.navigateToLogin} />
        </View>
      </View>
    )
  }
}
