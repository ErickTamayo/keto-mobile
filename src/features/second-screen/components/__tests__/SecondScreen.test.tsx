import 'react-native'
import * as React from 'react'
import { shallow } from 'enzyme'
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
  NavigationInjectedProps,
} from 'react-navigation'
import SecondScreen from '../SecondScreen'

describe('<SecondScreen />', () => {
  it('renders correctly', () => {
    const props: NavigationInjectedProps = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
    }

    const wrapper = shallow(<SecondScreen {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
