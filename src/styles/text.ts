import { StyleSheet, StyleProp, TextStyle } from 'react-native'
import Colors from './colors'

const color = {
  white: {
    color: Colors.white,
  },
  green: {
    color: Colors.green,
  },
  greyDarkest: {
    color: Colors.greyDarkest,
  },
  greyDarker: {
    color: Colors.greyDarker,
  },
  greyDark: {
    color: Colors.greyDark,
  },

  grey: {
    color: Colors.grey,
  },
  grey1: {
    color: Colors.grey1,
  },
  grey2: {
    color: Colors.grey2,
  },

  greyLight: {
    color: Colors.greyLight,
  },
  greyLighter: {
    color: Colors.greyLighter,
  },
  greyLightest: {
    color: Colors.greyLightest,
  },
}

const size = {
  xs: {
    fontSize: 12,
  },
  sm: {
    fontSize: 14,
  },
  base: {
    fontSize: 16,
  },
  lg: {
    fontSize: 18,
  },
  xl: {
    fontSize: 20,
  },
  xl2: {
    fontSize: 22,
  },
  xl3: {
    fontSize: 24,
  },
  xl4: {
    fontSize: 26,
  },
  xl5: {
    fontSize: 28,
  },
}

export default StyleSheet.create({
  ...color,
  ...size,
  center: {
    textAlign: 'center',
  } as TextStyle, // For some reason this wasnt working or being casted as expected
})
