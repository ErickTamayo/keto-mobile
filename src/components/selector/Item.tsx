import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Consumer, SelectorContext } from './SelectorContext'
import st from '../../styles'

export interface Props {
  label: string
  value: string
}

export default class Item extends Component<Props, {}> {
  render() {
    const { label, value } = this.props

    return (
      <Consumer>
        {({ selectedValue, onSelect }: SelectorContext) => (
          <TouchableOpacity
            onPress={() => onSelect && onSelect(value)}
            disabled={value === selectedValue}
          >
            <View
              style={[
                st.border.b3,
                st.justify.center,
                st.m.l4,
                st.m.r4,
                st.minWidth.w5,
                value === selectedValue ? st.border.purple : st.border.transparent,
              ]}
            >
              <Text
                style={[
                  st.font.medium,
                  st.text.lg,
                  st.text.center,
                  value === selectedValue ? st.text.purple : st.text.greyLight,
                ]}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </Consumer>
    )
  }
}
