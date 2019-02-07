import * as React from 'react'
import { StyleSheet, Text, View, Button as RNButton } from 'react-native'
import { StateProps, DispatchProps } from '../containers/StartScreen'
import { NavigationInjectedProps } from 'react-navigation'
import Button from '../../../components/button/Button'
import st from '../../../styles'

const containerStyle = [st.flex.f1, st.align.items.center, st.content.justify.center, st.bg.white]

export interface Props extends StateProps, DispatchProps, NavigationInjectedProps {}

export default class StartScreen extends React.Component<Props, object> {
  private renderWorld = (): string => 'World'

  public render(): JSX.Element {
    const { counter, addCounter, navigation } = this.props

    return (
      <View style={containerStyle}>
        <Text>Hello {this.renderWorld()}!</Text>
        <Text>Clicks: {counter}</Text>

        <Button
          title="Create Account"
          variant={'primary-lg'}
          onPress={() => navigation.navigate('SecondScreen')}
        />
        <Button title="Login" variant={'secondary-lg'} onPress={addCounter} />
      </View>
    )
  }
}
