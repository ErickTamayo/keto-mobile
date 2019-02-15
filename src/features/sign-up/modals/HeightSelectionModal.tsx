import React, { Component } from 'react'
import { View, Text, PickerIOS } from 'react-native'
import st from '../../../styles'
import Button from '../../../components/button/Button'
import { sequence } from '../../../helpers'

export interface Props {
  onSelect: (value?: any) => void
  unit: 'imperial' | 'metric'
  feet: number | null
  inches: number | null
  centimeters: number | null
}

export interface State {
  unit: 'imperial' | 'metric'
  // REPLACE IN as is a reserved word
  inches: number
  feet: number
  centimeters: number
}

export default class HeightSelectionModal extends Component<Props, State> {
  constructor(props: any) {
    super(props)
  }

  private onSelect = () => {
    const { onSelect, dismiss } = this.props
    // const { age } = this.state

    onSelect(0)
    dismiss()
  }

  render() {
    // const { age } = this.state

    return (
      <View style={[st.justify.center, st.items.center, st.text.center]}>
        <Text style={[st.font.medium, st.text.lg, st.text.greyDark]}>Height</Text>
        <View>
          {/* <PickerIOS
            selectedValue={age}
            style={[st.width.w28]}
            onValueChange={itemValue => this.setState({ age: itemValue as number })}
            itemStyle={[st.font.medium, st.text.lg, st.text.greyDark]}
          >
            {sequence(1, 99, 13).map((value: number) => (
              <PickerIOS.Item key={value} label={`${value} years`} value={value} />
            ))}
          </PickerIOS> */}
        </View>
        <Button title="Select" variant="primary-md" onPress={this.onSelect} />
      </View>
    )
  }
}
