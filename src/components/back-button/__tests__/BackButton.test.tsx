import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import BackButton from '../BackButton'

describe('<BackButton />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<BackButton />)
    expect(wrapper).toMatchSnapshot()
  })
})
