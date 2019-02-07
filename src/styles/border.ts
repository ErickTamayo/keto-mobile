import { StyleSheet } from 'react-native'
import Colors from './colors'

const color = StyleSheet.create({
  transparent: {
    borderColor: Colors.transparent,
  },
  white: {
    borderColor: Colors.white,
  },
  green: {
    borderColor: Colors.green,
  },
})

const radius = StyleSheet.create({
  rounded: {
    borderRadius: 10,
  },
  roundedFull: {
    borderRadius: 100,
  },
})

const width = StyleSheet.create({
  w1: {
    borderWidth: 1,
  },
  w2: {
    borderWidth: 2,
  },
  w3: {
    borderWidth: 3,
  },
  w4: {
    borderWidth: 4,
  },
  w5: {
    borderWidth: 5,
  },
})

export default {
  color,
  radius,
  width,
}
