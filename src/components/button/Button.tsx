import * as React from 'react'
import { TouchableOpacity, Text, View, GestureResponderEvent } from 'react-native'
import { buttonStyles, buttonContainerStyle } from './styles'

interface Props {
  title: string
  variant: 'primary' | 'primary-lg' | 'secondary' | 'secondary-lg'
  onPress?: (event: GestureResponderEvent) => void
}
export default ({ title, variant, onPress }: Props) => (
  <TouchableOpacity style={buttonStyles[variant].button} onPress={onPress}>
    <View style={buttonContainerStyle}>
      <Text style={buttonStyles[variant].text}>{title}</Text>
    </View>
  </TouchableOpacity>
)
