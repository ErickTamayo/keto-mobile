import * as React from 'react'
import { StyleSheet, Text, View, Button as RNButton } from 'react-native'
import { StateProps, DispatchProps } from '../containers/StartScreen'
import { NavigationInjectedProps } from 'react-navigation'
import Button from '../../../components/button/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export interface Props extends StateProps, DispatchProps, NavigationInjectedProps {}

export default class StartScreen extends React.Component<Props, object> {
  private renderWorld = (): string => 'World'

  public render(): JSX.Element {
    const { counter, addCounter, navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>Hello {this.renderWorld()}!</Text>
        <Text>Clicks: {counter}</Text>
        <RNButton onPress={addCounter} title="Click me" color="#841584" />
        <RNButton title="Go to Second Screen" onPress={() => navigation.navigate('SecondScreen')} />
        <Button title="Create Account" variant={'primary'} />
        <Button title="Login" variant={'secondary'} />
        <Button title="Create Account" variant={'primary-lg'} />
        <Button title="Login" variant={'secondary-lg'} />
      </View>
    )
  }
}
