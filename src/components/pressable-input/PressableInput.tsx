import React from 'react'
import { Text, View, GestureResponderEvent, TouchableOpacity, Image } from 'react-native'
import {
  containerStyle,
  subContainerStyle,
  iconStyle,
  textStyle,
  placeholderStyle,
  inputStyle,
  closeButtonStyle,
  closeImageStyle,
  closeDisabledImageStyle,
} from './styles'

export interface Props {
  icon: 'calendar' | 'height' | 'scale' | 'goal-scale'
  placeholder?: string
  value: string
  name: string
  onPress?: (event: GestureResponderEvent) => void
  onClear?: (event: GestureResponderEvent) => void
}

const icons = {
  calendar: require('../../assets/images/icon-calendar.png'),
  height: require('../../assets/images/icon-height.png'),
  scale: require('../../assets/images/icon-scale.png'),
  'goal-scale': require('../../assets/images/icon-goal-scale.png'),
}

const clearIcon = require('../../assets/images/icon-clear-button.png')

const PressableInput = ({ placeholder, value, onPress, onClear, icon }: Props) => (
  <View style={containerStyle}>
    <View style={subContainerStyle}>
      <View style={iconStyle}>
        <Image source={icons[icon]} />
      </View>
      <TouchableOpacity style={inputStyle} onPress={onPress}>
        <View>
          {value ? (
            <Text style={textStyle}>{value}</Text>
          ) : (
            <Text style={placeholderStyle}>{placeholder}</Text>
          )}
        </View>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={closeButtonStyle} onPress={onClear} disabled={value === ''}>
          {value ? (
            <Image style={closeImageStyle} source={clearIcon} />
          ) : (
            <View style={closeDisabledImageStyle} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  </View>
)

export default PressableInput
