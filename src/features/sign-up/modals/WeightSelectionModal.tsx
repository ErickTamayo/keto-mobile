import React, { Component } from 'react'
import { View, Text, PickerIOS } from 'react-native'
import st from '../../../styles'
import Button from '../../../components/button/Button'
import Selector from '../../../components/selector/Selector'
import { sequence } from '../../../helpers'

export interface Props {
  onSelect: (value?: any) => void
  dismiss: () => void
  title: string
  weight: Weight
}

export interface State {
  unit: Unit
  pounds: number
  kilograms: number
}

export default class WeightSelectionModal extends Component<Props, State> {
  state = {
    unit: this.props.weight.unit ? this.props.weight.unit : 'IMPERIAL',
    pounds: this.props.weight.pounds ? this.props.weight.pounds : 195,
    kilograms: this.props.weight.kilograms ? this.props.weight.kilograms : 88,
  }

  private onSelect = () => {
    const { onSelect, dismiss } = this.props
    const { unit, pounds, kilograms } = this.state
    // TODO normalize lbs and kg to be the same value on
    // both units
    onSelect({ unit, pounds, kilograms })
    dismiss()
  }

  private renderUnitSelector = () => {
    const { unit } = this.state

    return (
      <Selector
        selectedValue={unit}
        onSelect={unit => this.setState({ unit: unit as State['unit'] })}
      >
        <Selector.Item value="IMPERIAL" label="lbs" />
        <Selector.Item value="METRIC" label="kg" />
      </Selector>
    )
  }

  private renderImperialPickers = () => {
    const { unit, pounds } = this.state

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
          selectedValue={pounds}
          style={[st.width.w28]}
          onValueChange={itemValue => this.setState({ pounds: itemValue as number })}
          itemStyle={[st.font.medium, st.text.lg, st.text.greyDark]}
        >
          {sequence(1, 1000, 40).map((value: number) => (
            <PickerIOS.Item key={value} label={`${value} lbs`} value={value} />
          ))}
        </PickerIOS>
      </View>
    )
  }

  private renderMetricPicker = () => {
    const { unit, kilograms } = this.state

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
          selectedValue={kilograms}
          style={[st.width.w28]}
          onValueChange={itemValue => this.setState({ kilograms: itemValue as number })}
          itemStyle={[st.font.medium, st.text.lg, st.text.greyDark]}
        >
          {sequence(1, 450, 18).map((value: number) => (
            <PickerIOS.Item key={value} label={`${value} kg`} value={value} />
          ))}
        </PickerIOS>
      </View>
    )
  }

  render() {
    const { title } = this.props
    return (
      <View style={[st.justify.center, st.items.center, st.text.center]}>
        <Text style={[st.font.medium, st.text.lg, st.text.greyDark]}>{title}</Text>
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
