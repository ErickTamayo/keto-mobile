import * as React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import st from '../../../styles'
import NavigationOptions from '../../../constants/NavigationOptions'

export default class SecondScreen extends React.Component<NavigationInjectedProps, object> {
  public static navigationOptions = NavigationOptions

  private title = (): string => 'Go Back'

  public render(): JSX.Element {
    const { navigation } = this.props

    return (
      <View style={[st.flex.f1, st.items.center, st.justify.center, st.bg.greyLightest]}>
        <Text>Second Screen</Text>
        <Button onPress={() => navigation.navigate('Start')} title={this.title()} color="#841584" />
      </View>
    )
  }
}
