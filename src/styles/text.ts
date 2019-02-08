import { StyleSheet } from 'react-native'
import Colors from './colors'

const color = {
  white: {
    color: Colors.white,
  },
  green: {
    color: Colors.green,
  },
}

export default StyleSheet.create({
  ...color,
  center: {
    textAlign: 'center',
  },
})
