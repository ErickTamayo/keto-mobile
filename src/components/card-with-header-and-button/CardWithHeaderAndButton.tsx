import React, { ReactNode } from 'react'
import { Text, View, GestureResponderEvent } from 'react-native'
import Button from '../button/Button'
import {
  containerStyle,
  cardStyle,
  titleStyle,
  descriptionStyle,
  textContainerStyle,
  cardContainerStyle,
  endViewStyle,
} from './styles'

export interface Props {
  title: string
  description?: string
  buttonText: string
  onButtonPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  loading?: boolean
  children?: ReactNode
  footer?: ReactNode
}

const CardWithHeaderAndButton = ({
  title,
  description,
  buttonText,
  onButtonPress,
  disabled,
  children,
  footer,
}: Props) => (
  <View style={containerStyle}>
    <View style={textContainerStyle}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={descriptionStyle}>{description}</Text>
    </View>
    <View style={cardContainerStyle}>
      <View style={cardStyle}>
        <View>{children}</View>
        <Button
          title={buttonText}
          variant="primary-md"
          onPress={onButtonPress}
          disabled={disabled}
        />
      </View>
      {footer && <View>{footer}</View>}
    </View>
    <View style={endViewStyle} />
  </View>
)

export default CardWithHeaderAndButton
