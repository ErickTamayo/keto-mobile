import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import HeightSelectionModal, { Props } from '../HeightSelectionModal'

describe('<HeightSelectionModal />', () => {
  it('renders correctly', () => {
    const props: Props = {
      onSelect: jest.fn(),
      dismiss: jest.fn(),
      height: {
        unit: 'imperial',
        feet: null,
        inches: null,
        centimeters: null,
      },
    }

    const wrapper = shallow(<HeightSelectionModal {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
