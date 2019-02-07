import * as React from 'react'
import { TouchableOpacity, Text, View, StyleProp, ViewStyle } from 'react-native'
import { buttonStyles, buttonContainerStyle } from './styles'

export interface Props {
  title: string
  variant: 'primary' | 'primary-lg' | 'secondary' | 'secondary-lg'
  onPress?: () => {}
}

export default class Button extends React.Component<Props, object> {
  public render(): JSX.Element {
    const { title, onPress, variant } = this.props

    const buttonStyle: StyleProp<ViewStyle> = buttonStyles[variant].button
    const textStyle: StyleProp<ViewStyle> = buttonStyles[variant].text

    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <View style={buttonContainerStyle}>
          <Text style={textStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
