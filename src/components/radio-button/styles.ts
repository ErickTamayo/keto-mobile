import st from '../../styles'

const commonOutlineStyle = [
  st.flex.f1,
  st.border.roundedFull,
  st.border.a1,
  st.justify.center,
  st.items.center,
]

const commonFillStyle = [st.border.roundedFull, { height: 29.5, width: 29.5 }]

const commonTextStyle = [st.font.medium, st.text.xs, st.m.t2]

export const checkedOutlineStyle = [...commonOutlineStyle, st.border.green]
export const uncheckedOutlineStyle = [...commonOutlineStyle, st.border.greyLight]

export const checkedFillStyle = [...commonFillStyle, st.bg.green]
export const uncheckedFillStyle = [...commonFillStyle]

export const checkedTextStyle = [...commonTextStyle, st.text.green]
export const uncheckedTextStyle = [...commonTextStyle, st.text.greyLight]

export const containerStyle = [st.height.h5, st.items.center]
export const wrapperStyle = [st.flex.f1, st.justify.center, st.flex.col, st.items.center]
export const radioContainerStyle = [st.height.h3, st.width.w3]
