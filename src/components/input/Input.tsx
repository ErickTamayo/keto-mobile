import React, { Component } from 'react'
import { View, TextInput, Image, TextInputProps } from 'react-native'
import { containerStyle, subContainerStyle, iconStyle, inputStyle } from './styles'
import st from '../../styles'
import icons from '../../icons'

export interface Props extends TextInputProps {
  icon: string
}

class Input extends Component<Props, {}> {
  render() {
    const { icon } = this.props
    return (
      <View style={containerStyle}>
        <View style={subContainerStyle}>
          <View style={iconStyle}>
            <Image source={icons.get(icon)} />
          </View>
          <View>
            <TextInput
              {...this.props}
              style={inputStyle}
              placeholderTextColor={st.colors.greyLighter}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Input
