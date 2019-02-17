import 'react-native'
import React from 'react'
import { Text, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native'
import {
  NavigationInjectedProps,
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation'
import { mount } from 'enzyme'
import Modal from '../Modal'

jest.useFakeTimers()

describe('<Modal />', () => {
  it('renders correctly', () => {
    const props: NavigationInjectedProps = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
    }

    const getParamMock = jest.fn()
    getParamMock.mockReturnValueOnce(Text)
    getParamMock.mockReturnValueOnce({ children: 'lorem ipsum' })

    props.navigation.getParam = getParamMock

    const wrapper = mount(<Modal {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('dismisses once the dismissible area is pressed', () => {
    const props: NavigationInjectedProps = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
    }

    const getParamMock = jest.fn()
    getParamMock.mockReturnValueOnce(Text)
    getParamMock.mockReturnValueOnce({ children: 'lorem ipsum' })

    props.navigation.getParam = getParamMock
    props.navigation.pop = jest.fn()

    const wrapper = mount(<Modal {...props} />)

    wrapper.find(TouchableWithoutFeedback).prop('onPress')!({} as GestureResponderEvent)

    jest.runAllTimers()

    expect(props.navigation.pop).toHaveBeenCalled()
  })
})
