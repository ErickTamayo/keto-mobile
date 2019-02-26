import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import AgeSelectionModal, { Props } from '../AgeSelectionModal'

describe('<AgeSelectionModal />', () => {
  it('renders correctly', () => {
    const props: Props = {
      onSelect: jest.fn(),
      dismiss: jest.fn(),
      age: 0,
    }

    const wrapper = shallow(<AgeSelectionModal {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
