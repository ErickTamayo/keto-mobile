import { StyleSheet } from 'react-native'
import Colors from './colors'

const color = {
  transparent: {
    borderColor: Colors.transparent,
  },
  white: {
    borderColor: Colors.white,
  },
  green: {
    borderColor: Colors.green,
  },
}

const radius = {
  rounded: {
    borderRadius: 10,
  },
  roundedFull: {
    borderRadius: 100,
  },
}

const width = {
  hairline: {
    borderWidth: StyleSheet.hairlineWidth,
  },
  a1: {
    borderWidth: 1,
  },
  a2: {
    borderWidth: 2,
  },
  a3: {
    borderWidth: 3,
  },
  a4: {
    borderWidth: 4,
  },
  a5: {
    borderWidth: 5,
  },
}

export default StyleSheet.create({
  ...color,
  ...radius,
  ...width,
})
