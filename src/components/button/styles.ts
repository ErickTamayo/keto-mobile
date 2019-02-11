import st from '../../styles'

const commonButton = [
  st.m.a1,
  st.p.l3,
  st.p.r3,
  st.height.h4,
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
    button: [...commonButton, st.bg.green, st.width.w14],
  },
  'primary-lg': {
    text: [...commonText, st.text.white],
    button: [...commonButton, st.bg.green, st.width.w24],
  },
  secondary: {
    text: [...commonText, st.text.green, st.width.w14],
    button: [...commonButton, st.bg.transparent],
  },
  'secondary-lg': {
    text: [...commonText, st.text.green],
    button: [...commonButton, st.bg.transparent, st.width.w24],
  },
}

export const buttonContainerStyle = [st.flex.f1, st.justify.center, st.items.center]

export const disabledStyle = [st.bg.greyLight, st.border.transparent]
