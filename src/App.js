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
  constructor() {
    super(...arguments)
    this.renderWorld = () => 'World'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.renderWorld()}</Text>
      </View>
    )
  }
}
