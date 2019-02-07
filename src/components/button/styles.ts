import { StyleProp, ViewStyle } from 'react-native'
import st from '../../styles'

interface ButtonStyles {
  [key: string]: { text: StyleProp<ViewStyle>; button: StyleProp<ViewStyle> }
}

const common = [
  st.m.a1,
  st.p.l3,
  st.p.r3,
  st.height.h2,
  st.border.width.w1,
  st.border.color.green,
  st.border.radius.roundedFull,
]

export const buttonStyles: ButtonStyles = {
  primary: {
    text: [st.text.color.white, st.text.align.center] as StyleProp<ViewStyle>,
    button: [...common, st.bg.green] as StyleProp<ViewStyle>,
  },
  'primary-lg': {
    text: [st.text.color.white, st.text.align.center] as StyleProp<ViewStyle>,
    button: [...common, st.bg.green, st.width.w12] as StyleProp<ViewStyle>,
  },
  secondary: {
    text: [st.text.color.green, st.text.align.center] as StyleProp<ViewStyle>,
    button: [...common, st.bg.transparent] as StyleProp<ViewStyle>,
  },
  'secondary-lg': {
    text: [st.text.color.green, st.text.align.center] as StyleProp<ViewStyle>,
    button: [...common, st.bg.transparent, st.width.w12] as StyleProp<ViewStyle>,
  },
}

export const buttonContainerStyle = [st.content.flex.flex, st.content.justify.center, st.content.align.center]
