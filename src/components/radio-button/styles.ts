import st from '../../styles'

const commonOutlineStyle = [
  st.flex.f1,
  st.border.roundedFull,
  st.border.a1,
  st.justify.center,
  st.items.center,
]

const commonFillStyle = [st.border.roundedFull, { height: 32.5, width: 32.5 }]

const commonTextStyle = [st.font.medium, st.text.xs, st.m.t2]

export const checkedOutlineStyle = [...commonOutlineStyle, st.border.green]
export const uncheckedOutlineStyle = [...commonOutlineStyle, st.border.greyLight]

export const checkedFillStyle = [...commonFillStyle, st.bg.green]
export const uncheckedFillStyle = [...commonFillStyle]

export const checkedTextStyle = [...commonTextStyle, st.text.green]
export const uncheckedTextStyle = [...commonTextStyle, st.text.greyLight]

export const containerStyle = [st.height.h8, st.items.center]
export const wrapperStyle = [st.flex.f1, st.justify.center, st.flex.col, st.items.center]
export const radioContainerStyle = [st.height.h5, st.width.w5]
