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
  purple: {
    borderColor: Colors.purple,
  },

  greyDarkest: {
    borderColor: Colors.greyDarkest,
  },
  greyDarker: {
    borderColor: Colors.greyDarker,
  },
  greyDark: {
    borderColor: Colors.greyDark,
  },

  grey: {
    borderColor: Colors.grey,
  },
  grey1: {
    borderColor: Colors.grey1,
  },
  grey2: {
    borderColor: Colors.grey2,
  },

  greyLight: {
    borderColor: Colors.greyLight,
  },
  greyLighter: {
    borderColor: Colors.greyLighter,
  },
  greyLightest: {
    borderColor: Colors.greyLightest,
  },
}

const radius = {
  rounded: {
    borderRadius: 5,
  },
  roundedLg: {
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
  b1: {
    borderBottomWidth: 1,
  },
  b2: {
    borderBottomWidth: 2,
  },
  b3: {
    borderBottomWidth: 3,
  },
  b4: {
    borderBottomWidth: 4,
  },
  b5: {
    borderBottomWidth: 5,
  },
}

export default StyleSheet.create({
  ...color,
  ...radius,
  ...width,
})
