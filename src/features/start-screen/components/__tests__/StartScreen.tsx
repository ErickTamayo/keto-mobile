import 'react-native'
import * as React from 'react'
import { shallow } from 'enzyme'
import StartScreen from '../StartScreen'

describe('<StartScreen />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StartScreen counter={0} />)
    expect(wrapper).toMatchSnapshot()
  })
})
