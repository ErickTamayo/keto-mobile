import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from './SelectorContext'
import Item from './Item'
import st from '../../styles'

export interface Props {
  selectedValue?: string
  onSelect?: (value: string) => void
}

export default class Selector extends Component<Props, {}> {
  static Item = Item

  render() {
    const { selectedValue, onSelect, children } = this.props
    return (
      <Provider value={{ selectedValue, onSelect }}>
        <View style={[st.maxHeight.h4, st.m.t2]}>
          <View style={[st.flex.f1, st.flex.row]}>{children}</View>
        </View>
      </Provider>
    )
  }
}
