import * as React from 'react'
import { TouchableOpacity, Text, View, StyleProp, ViewStyle } from 'react-native'
import {
  checkedOutlineStyle,
  uncheckedOutlineStyle,
  checkedFillStyle,
  uncheckedFillStyle,
  checkedTextStyle,
  uncheckedTextStyle,
  radioContainerStyle,
  containerStyle,
  wrapperStyle,
} from './styles'

export interface Props {
  title: string
  variant: 'lg'
  onPress?: (value: string) => void
  disabled?: boolean
  checked: boolean
  value: string
  style?: StyleProp<ViewStyle>
}

export default class RadioButton extends React.Component<Props, {}> {
  private handleOnPress = () => {
    const { onPress, value } = this.props
    onPress && onPress(value)
  }

  render(): JSX.Element {
    const { checked, disabled, title, style } = this.props
    return (
      <View style={[...containerStyle, style]}>
        <View style={wrapperStyle}>
          <View style={radioContainerStyle}>
            <TouchableOpacity
              style={[...(checked ? checkedOutlineStyle : uncheckedOutlineStyle)]}
              onPress={this.handleOnPress}
              disabled={disabled}
            >
              <View style={[...(checked ? checkedFillStyle : uncheckedFillStyle)]} />
            </TouchableOpacity>
          </View>
          <Text style={[...(checked ? checkedTextStyle : uncheckedTextStyle)]}>{title}</Text>
        </View>
      </View>
    )
  }
}
