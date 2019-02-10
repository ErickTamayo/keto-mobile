// import { StyleProp, ViewStyle } from 'react-native'
import st from '../../styles'

const commonButton = [
  st.m.a1,
  st.p.l3,
  st.p.r3,
  st.height.h2,
  st.border.a1,
  st.border.green,
  st.border.roundedFull,
]

const commonText = [st.font.medium, st.text.center, st.text.base]

export const buttonStyles = {
  primary: {
    text: [...commonText, st.text.white],
    button: [...commonButton, st.bg.green],
  },
  'primary-md': {
    text: [...commonText, st.text.white],
    button: [...commonButton, st.bg.green, st.width.w7],
  },
  'primary-lg': {
    text: [...commonText, st.text.white],
    button: [...commonButton, st.bg.green, st.width.w12],
  },
  secondary: {
    text: [...commonText, st.text.green],
    button: [...commonButton, st.bg.transparent],
  },
  'secondary-lg': {
    text: [...commonText, st.text.green],
    button: [...commonButton, st.bg.transparent, st.width.w12],
  },
}

export const buttonContainerStyle = [st.flex.f1, st.justify.center, st.items.center]

export const disabledStyle = [st.bg.greyLight, st.border.transparent]
