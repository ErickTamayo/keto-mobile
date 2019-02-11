import 'react-native'
import * as React from 'react'
import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import { shallow, mount } from 'enzyme'
import CardWithHeaderAndButton, { Props } from '../CardWithHeaderAndButton'

describe('<CardWithHeaderAndButton />', () => {
  it('renders correctly', () => {
    const props: Props = {
      title: 'card-title',
      buttonText: 'button-text',
    }
    const wrapper = shallow(
      <CardWithHeaderAndButton {...props}>
        <Text>card-children</Text>
      </CardWithHeaderAndButton>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders disabled', () => {
    const props: Props = {
      title: 'card-title',
      buttonText: 'button-text',
      disabled: true,
    }
    const wrapper = shallow(
      <CardWithHeaderAndButton {...props}>
        <Text>card-children</Text>
      </CardWithHeaderAndButton>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should trigger onPress once pressed', () => {
    const props: Props = {
      title: 'card-title',
      buttonText: 'button-text',
      onButtonPress: jest.fn(),
    }
    const wrapper = mount(<CardWithHeaderAndButton {...props} />)
    wrapper.find(TouchableOpacity).prop('onPress')!({} as GestureResponderEvent)

    expect(props.onButtonPress).toBeCalled()
  })
})
