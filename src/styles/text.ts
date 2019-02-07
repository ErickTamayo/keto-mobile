import { StyleSheet } from 'react-native'
import Colors from './colors'

const color = StyleSheet.create({
  white: {
    color: Colors.white,
  },
  green: {
    color: Colors.green,
  },
})

const align = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
})

export default {
  color,
  align,
}
