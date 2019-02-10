import { StyleSheet } from 'react-native'

const shadows = {
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
}

export default StyleSheet.create({
  ...shadows,
})
