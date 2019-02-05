import 'react-native'
import * as React from 'react'
import { shallow } from 'enzyme'
import StartScreen from '../StartScreen'
import { AddCounter } from '../../actions'

describe('<StartScreen />', () => {
  it('renders correctly', () => {
    const addCounter = () => ({} as AddCounter)
    const wrapper = shallow(<StartScreen counter={0} addCounter={addCounter} />)
    expect(wrapper).toMatchSnapshot()
  })
})
