// import { StyleProp, ViewStyle } from 'react-native'
import st from '../../styles'

const common = [
  st.m.a1,
  st.p.l3,
  st.p.r3,
  st.height.h2,
  st.border.a1,
  st.border.green,
  st.border.roundedFull,
]

export const buttonStyles = {
  primary: {
    text: [st.font.medium, st.text.white, st.text.center],
    button: [...common, st.bg.green],
  },
  'primary-lg': {
    text: [st.font.medium, st.text.white, st.text.center],
    button: [...common, st.bg.green, st.width.w12],
  },
  secondary: {
    text: [st.font.medium, st.text.green, st.text.center],
    button: [...common, st.bg.transparent],
  },
  'secondary-lg': {
    text: [st.font.medium, st.text.green, st.text.center],
    button: [...common, st.bg.transparent, st.width.w12],
  },
}

export const buttonContainerStyle = [st.flex.f1, st.justify.center, st.items.center]
