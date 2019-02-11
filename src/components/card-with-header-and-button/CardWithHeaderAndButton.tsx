import React, { ReactNode } from 'react'
import { Text, View, GestureResponderEvent } from 'react-native'
import Button from '../button/Button'
import {
  cardContainerStyle,
  cardStyle,
  titleStyle,
  descriptionStyle,
  childrenContainerStyle,
  textContainerStyle,
} from './styles'

export interface Props {
  title: string
  description?: string
  buttonText: string
  onButtonPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  loading?: boolean
  children?: ReactNode
}

const CardWithHeaderAndButton = ({
  title,
  description,
  buttonText,
  onButtonPress,
  disabled,
  children,
}: Props) => (
  <View style={cardContainerStyle}>
    <View style={textContainerStyle}>
      <Text style={titleStyle}>{title}</Text>
      <Text style={descriptionStyle}>{description}</Text>
    </View>
    <View style={cardStyle}>
      <View style={childrenContainerStyle}>{children}</View>
      <Button title={buttonText} variant="primary-md" onPress={onButtonPress} disabled={disabled} />
    </View>
  </View>
)

export default CardWithHeaderAndButton
