import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import WeightSelectionModal, { Props } from '../WeightSelectionModal'

describe('<WeightSelectionModal />', () => {
  it('renders correctly', () => {
    const props: Props = {
      onSelect: jest.fn(),
      dismiss: jest.fn(),
      weight: {
        unit: 'imperial',
        pounds: null,
        kilograms: null,
      },
      title: 'weight-modal-title',
    }

    const wrapper = shallow(<WeightSelectionModal {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
