import 'react-native'
import React from 'react'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { shallow } from 'enzyme'
import RadioButton, { Props } from '../RadioButton'

describe('<RadioButton />', () => {
  it('renders correctly', () => {
    const props: Props = {
      title: 'radio-button-title',
      variant: 'lg',
      checked: true,
      value: 'radio-button-value',
    }

    const wrapper = shallow(<RadioButton {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders unchecked', () => {
    const props: Props = {
      title: 'radio-button-title',
      variant: 'lg',
      checked: false,
      value: 'radio-button-value',
    }

    const wrapper = shallow(<RadioButton {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders disabled', () => {
    const props: Props = {
      title: 'radio-button-title',
      variant: 'lg',
      checked: false,
      value: 'radio-button-value',
      disabled: true,
    }

    const wrapper = shallow(<RadioButton {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('triggers onPress once pressed', () => {
    const props: Props = {
      title: 'radio-button-title',
      variant: 'lg',
      checked: false,
      value: 'radio-button-value',
      onPress: jest.fn(),
    }

    const wrapper = shallow(<RadioButton {...props} />)
    wrapper.find(TouchableOpacity).prop('onPress')!({} as GestureResponderEvent)
    expect(props.onPress).toBeCalled()
  })
})
