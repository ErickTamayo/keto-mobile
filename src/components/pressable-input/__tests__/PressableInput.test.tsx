import 'react-native'
import React from 'react'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { shallow } from 'enzyme'
import PressableInput, { Props } from '../PressableInput'

describe('<PressableInput />', () => {
  it('renders correctly', () => {
    const props: Props = {
      icon: 'calendar',
      placeholder: 'placeholder-text',
      value: 'value-text',
      name: 'input-name',
    }

    const wrapper = shallow(<PressableInput {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the placeholder when value is empty', () => {
    const props: Props = {
      icon: 'calendar',
      placeholder: 'placeholder-text',
      value: '',
      name: 'input-name',
    }

    const wrapper = shallow(<PressableInput {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('triggers onPress once input is pressed', () => {
    const props: Props = {
      icon: 'calendar',
      placeholder: 'placeholder-text',
      value: 'value-text',
      name: 'input-name',
      onPress: jest.fn(),
      onClear: jest.fn(),
    }

    const wrapper = shallow(<PressableInput {...props} />)
    wrapper
      .find(TouchableOpacity)
      .at(0)
      .prop('onPress')!({} as GestureResponderEvent)

    expect(props.onPress).toBeCalled()
    expect(props.onClear).not.toBeCalled()
  })

  it('triggers onClear once clear icon is pressed', () => {
    const props: Props = {
      icon: 'calendar',
      placeholder: 'placeholder-text',
      value: 'value-text',
      name: 'input-name',
      onPress: jest.fn(),
      onClear: jest.fn(),
    }

    const wrapper = shallow(<PressableInput {...props} />)
    wrapper
      .find(TouchableOpacity)
      .at(1)
      .prop('onPress')!({} as GestureResponderEvent)

    expect(props.onPress).not.toBeCalled()
    expect(props.onClear).toBeCalled()
  })
})
