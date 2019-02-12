import * as React from 'react'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { shallow, mount } from 'enzyme'
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation'
import GenderSelection, { Props } from '../GenderSelection'
import { SelectGender } from '../../actions'

describe('<GenderSelection />', () => {
  it('renders correctly', () => {
    const props: Props = {
      gender: null,
      selectGender: () => ({} as SelectGender),
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
    }

    const wrapper = shallow(<GenderSelection {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('selects female on press the first radio button', () => {
    const props: Props = {
      gender: null,
      selectGender: jest.fn(),
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
    }

    const wrapper = mount(<GenderSelection {...props} />)

    wrapper
      .find(TouchableOpacity)
      .at(0)
      .prop('onPress')!({} as GestureResponderEvent)

    expect(props.selectGender).toBeCalled()
    expect((props.selectGender as jest.Mock<{}>).mock.calls[0][0]).toBe('female')
  })

  it('selects male on press the first radio button', () => {
    const props: Props = {
      gender: null,
      selectGender: jest.fn(),
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
    }

    const wrapper = mount(<GenderSelection {...props} />)

    wrapper
      .find(TouchableOpacity)
      .at(1)
      .prop('onPress')!({} as GestureResponderEvent)

    expect(props.selectGender).toBeCalled()
    expect((props.selectGender as jest.Mock<{}>).mock.calls[0][0]).toBe('male')
  })
})
