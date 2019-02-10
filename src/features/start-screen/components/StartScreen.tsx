import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { StateProps, DispatchProps } from '../containers/StartScreen'
import Button from '../../../components/button/Button'
import st from '../../../styles'
import NavigationOptions from '../../../constants/NavigationOptions'

export interface Props extends StateProps, DispatchProps, NavigationInjectedProps {}

export default class StartScreen extends React.Component<Props, object> {
  public static navigationOptions = NavigationOptions

  private renderWorld = (): string => 'World'

  private navigateToSignUp = () => {
    const { navigation } = this.props
    navigation.navigate('GenderSelection')
  }

  // private navigateToLogIn = () => this.props.navigation.navigate('Login')

  public render(): JSX.Element {
    const { counter, addCounter } = this.props

    return (
      <View style={[st.flex.f1, st.flex.row, st.items.end, st.justify.center, st.bg.greyLightest]}>
        <View style={[st.flex.f1, st.items.center, st.justify.center, st.m.b10]}>
          <Text>Hello {this.renderWorld()}!</Text>
          <Text>Clicks: {counter}</Text>
          <Button title="Create Account" variant="primary-lg" onPress={this.navigateToSignUp} />
          <Button title="Log In" variant="secondary-lg" onPress={addCounter} />
        </View>
      </View>
    )
  }
}
