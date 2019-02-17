import React, { Component } from 'react'
import { View, Text, PickerIOS } from 'react-native'
import st from '../../../styles'
import Button from '../../../components/button/Button'
import { sequence } from '../../../helpers'

export interface Props {
  onSelect: (value?: any) => void
}

export interface State {
  age: number
}

export default class AgeSelectionModal extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      age: props.age ? props.age : 25,
    }
  }

  private onSelect = () => {
    const { onSelect, dismiss } = this.props
    const { age } = this.state

    onSelect(age)
    dismiss()
  }

  render() {
    const { age } = this.state

    return (
      <View style={[st.justify.center, st.items.center, st.text.center]}>
        <Text style={[st.font.medium, st.text.lg, st.text.greyDark]}>Age</Text>
        <View>
          <PickerIOS
            selectedValue={age}
            style={[st.width.w28]}
            onValueChange={itemValue => this.setState({ age: itemValue as number })}
            itemStyle={[st.font.medium, st.text.lg, st.text.greyDark]}
          >
            {sequence(1, 100, 13).map((value: number) => (
              <PickerIOS.Item key={value} label={`${value} years`} value={value} />
            ))}
          </PickerIOS>
        </View>
        <Button title="Select" variant="primary-md" onPress={this.onSelect} />
      </View>
    )
  }
}
