import 'react-native'
import * as React from 'react'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { shallow } from 'enzyme'
import Button, { Props } from '../Button'

describe('<Button />', () => {
  it('renders correctly', () => {
    const props: Props = {
      variant: 'primary',
      title: 'button-title',
    }
    const wrapper = shallow(<Button {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders disabled', () => {
    const props: Props = {
      variant: 'primary',
      title: 'button-title',
      disabled: true,
    }
    const wrapper = shallow(<Button {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should trigger onPress once pressed', () => {
    const props: Props = {
      variant: 'primary',
      title: 'button-title',
      onPress: jest.fn(),
    }
    const wrapper = shallow(<Button {...props} />)
    wrapper.find(TouchableOpacity).prop('onPress')!({} as GestureResponderEvent)

    expect(props.onPress).toBeCalled()
  })
})
