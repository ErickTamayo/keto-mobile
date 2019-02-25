import React, { Component } from 'react'
import { View, Text, PickerIOS } from 'react-native'
import st from '../../../styles'
import Button from '../../../components/button/Button'
import Selector from '../../../components/selector/Selector'
import { sequence } from '../../../helpers'

export interface Props {
  onSelect: (value?: any) => void
  dismiss: () => void
  height: Height
}

export interface State {
  unit: Unit
  feet: number
  inches: number
  centimeters: number
}

export default class HeightSelectionModal extends Component<Props, State> {
  state = {
    unit: this.props.height.unit ? this.props.height.unit : 'IMPERIAL',
    feet: this.props.height.feet ? this.props.height.feet : 5,
    inches: this.props.height.inches ? this.props.height.inches : 9,
    centimeters: this.props.height.centimeters ? this.props.height.centimeters : 175,
  }

  private onSelect = () => {
    const { onSelect, dismiss } = this.props
    const { unit, feet, inches, centimeters } = this.state
    // TODO normalize cm and ft/in to be the same value on
    // both units
    onSelect({ unit, feet, inches, centimeters })
    dismiss()
  }

  private renderUnitSelector = () => {
    const { unit } = this.state

    return (
      <Selector
        selectedValue={unit}
        onSelect={unit => this.setState({ unit: unit as State['unit'] })}
      >
        <Selector.Item value="IMPERIAL" label="in" />
        <Selector.Item value="METRIC" label="cm" />
      </Selector>
    )
  }

  private renderImperialPickers = () => {
    const { unit, feet, inches } = this.state

    return (
      <View
        style={[
          st.flex.f1,
          st.flex.row,
          st.items.center,
          unit === 'IMPERIAL' ? st.display.flex : st.display.none,
        ]}
      >
        <PickerIOS
          selectedValue={feet}
          style={[st.width.w14]}
          onValueChange={itemValue => this.setState({ feet: itemValue as number })}
          itemStyle={[st.font.medium, st.text.lg, st.text.greyDark]}
        >
          {sequence(1, 8, 3).map((value: number) => (
            <PickerIOS.Item key={`ft-${value}`} label={`${value} ft`} value={value} />
          ))}
        </PickerIOS>
        <PickerIOS
          selectedValue={inches}
          style={[st.width.w14]}
          onValueChange={itemValue => this.setState({ inches: itemValue as number })}
          itemStyle={[st.font.medium, st.text.lg, st.text.greyDark]}
        >
          {sequence(1, 12).map((value: number) => (
            <PickerIOS.Item key={value} label={`${value} in`} value={value} />
          ))}
        </PickerIOS>
      </View>
    )
  }

  private renderMetricPicker = () => {
    const { unit, centimeters } = this.state

    return (
      <View
        style={[
          st.flex.f1,
          st.flex.row,
          st.items.center,
          unit === 'METRIC' ? st.display.flex : st.display.none,
        ]}
      >
        <PickerIOS
          selectedValue={centimeters}
          style={[st.width.w28]}
          onValueChange={itemValue => this.setState({ centimeters: itemValue as number })}
          itemStyle={[st.font.medium, st.text.lg, st.text.greyDark]}
        >
          {sequence(1, 241, 91).map((value: number) => (
            <PickerIOS.Item key={value} label={`${value} cm`} value={value} />
          ))}
        </PickerIOS>
      </View>
    )
  }

  render() {
    return (
      <View style={[st.justify.center, st.items.center, st.text.center]}>
        <Text style={[st.font.medium, st.text.lg, st.text.greyDark]}>Height</Text>
        {this.renderUnitSelector()}
        <View style={[st.maxHeight.h27, st.items.center, st.m.t1]}>
          {this.renderImperialPickers()}
          {this.renderMetricPicker()}
        </View>
        <Button title="Select" variant="primary-md" onPress={this.onSelect} />
      </View>
    )
  }
}
