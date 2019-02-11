import 'react-native'
import * as React from 'react'
import { shallow } from 'enzyme'
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation'
import GenderSelection, { Props } from '../GenderSelection'
import { SelectGender } from '../../actions'

describe('<GenderSelection />', () => {
  it('renders correctly', () => {
    const props: Props = {
      gender: 'female',
      selectGender: () => ({} as SelectGender),
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
    }
    const wrapper = shallow(<GenderSelection {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
