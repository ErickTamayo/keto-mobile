import * as React from 'react'
import { TouchableOpacity, Text, View, GestureResponderEvent } from 'react-native'
import { buttonStyles, buttonContainerStyle, disabledStyle } from './styles'

export interface Props {
  title: string
  variant: 'primary' | 'primary-md' | 'primary-lg' | 'secondary' | 'secondary-lg'
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  loading?: boolean
}

const Button = ({ title, variant, onPress, disabled }: Props) => (
  <TouchableOpacity
    style={[...buttonStyles[variant].button, disabled ? disabledStyle : null]}
    onPress={onPress}
    disabled={disabled}
  >
    <View style={buttonContainerStyle}>
      <Text style={buttonStyles[variant].text}>{title}</Text>
    </View>
  </TouchableOpacity>
)

export default Button
