import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StateProps, DispatchProps } from '../containers/StartScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export interface Props extends StateProps, DispatchProps {}

export default class StartScreen extends React.Component<Props, object> {
  private renderWorld = (): string => 'World'

  public render(): JSX.Element {
    const { counter, addCounter } = this.props

    return (
      <View style={styles.container}>
        <Text>Hello {this.renderWorld()}!</Text>
        <Text>Counter: {counter}</Text>
        <Button onPress={addCounter} title="Add to Counter" color="#841584" />
      </View>
    )
  }
}
