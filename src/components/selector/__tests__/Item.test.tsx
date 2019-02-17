import 'react-native'
import React from 'react'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { mount } from 'enzyme'
import Item, { Props } from '../Item'
import { Provider } from '../SelectorContext'

describe('<Item />', () => {
  it('renders correctly', () => {
    const props: Props = {
      label: 'item-label',
      value: 'item-value',
    }
    const wrapper = mount(<Item {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should be highlighted once selectedValue is the same as the item value', () => {
    const props: Props = {
      label: 'item-label',
      value: 'item-value',
    }

    const onSelect = jest.fn()

    const wrapper = mount(
      <Provider value={{ selectedValue: 'item-value', onSelect }}>
        <Item {...props} />
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('calls onSelect once pressed', () => {
    const props: Props = {
      label: 'item-label',
      value: 'item-value',
    }

    const onSelect = jest.fn()

    const wrapper = mount(
      <Provider value={{ selectedValue: 'item-value', onSelect }}>
        <Item {...props} />
      </Provider>
    )

    wrapper.find(TouchableOpacity).prop('onPress')!({} as GestureResponderEvent)
    expect(onSelect).toBeCalled()
    expect(onSelect.mock.calls).toEqual([['item-value']])
  })
})
