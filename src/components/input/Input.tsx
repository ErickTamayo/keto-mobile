import React, { Component } from 'react'
import { View, TextInput, Image, TextInputProps } from 'react-native'
import { containerStyle, subContainerStyle, iconStyle, inputStyle } from './styles'
import st from '../../styles'
import icons from '../../icons'

export interface Props extends TextInputProps {
  icon: string
  value: string
  name: string
}

export interface State {
  text: string
}

class Input extends Component<Props, State> {
  state = {
    text: this.props.value,
    shouldHavePlaceholderStyle: true,
  }

  render() {
    const { icon } = this.props
    const { text } = this.state
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
              onChangeText={text => this.setState({ text })}
              value={text}
              placeholderTextColor={st.colors.greyLighter}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Input
