import { StyleSheet } from 'react-native'

const flex = StyleSheet.create({
  flex: {
    flex: 1,
  },
})

const justify = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
})

const align = StyleSheet.create({
  center: {
    alignContent: 'center',
  },
})

export default {
  justify,
  align,
  flex,
}
