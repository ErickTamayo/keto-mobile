import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default class App extends React.Component {
  renderWorld = (): string => 'World'

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>Hello {this.renderWorld()}</Text>
      </View>
    )
  }
}
