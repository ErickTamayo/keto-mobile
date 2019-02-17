import React from 'react'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { mount } from 'enzyme'
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation'
import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'

import { GET_SIGN_UP_USER_GENDER } from '../../queries'

import GenderSelection, { Props } from '../GenderSelection'

describe('<GenderSelection />', () => {
  it('renders correctly', async () => {
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      gender: null,
      setSignUpUserGender: jest.fn(),
    }

    const mocks = [
      {
        request: {
          query: GET_SIGN_UP_USER_GENDER,
          variables: {},
        },
        result: {
          data: {
            signUpUser: { gender: null },
          },
        },
      },
    ]

    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <GenderSelection {...props} />
      </MockedProvider>
    )

    await wait(0)
    wrapper.update()

    expect(wrapper.find(GenderSelection)).toMatchSnapshot()
  })

  it('selects female on press the first radio button', async () => {
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      gender: null,
      setSignUpUserGender: jest.fn(),
    }

    const mocks = [
      {
        request: {
          query: GET_SIGN_UP_USER_GENDER,
          variables: {},
        },
        result: {
          data: {
            signUpUser: { gender: null },
          },
        },
      },
    ]

    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <GenderSelection {...props} />
      </MockedProvider>
    )

    await wait(0)
    wrapper.update()

    expect(props.setSignUpUserGender).not.toBeCalled()

    wrapper
      .find(TouchableOpacity)
      .at(0)
      .prop('onPress')!({} as GestureResponderEvent)

    await wait(0)
    wrapper.update()

    expect(props.setSignUpUserGender).toBeCalledWith({ variables: { gender: 'female' } })
    expect(props.setSignUpUserGender).toBeCalled()
  })

  it('selects male on press the second radio button', async () => {
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      gender: null,
      setSignUpUserGender: jest.fn(),
    }

    const mocks = [
      {
        request: {
          query: GET_SIGN_UP_USER_GENDER,
          variables: {},
        },
        result: {
          data: {
            signUpUser: { gender: null },
          },
        },
      },
    ]

    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <GenderSelection {...props} />
      </MockedProvider>
    )

    await wait(0)
    wrapper.update()

    expect(props.setSignUpUserGender).not.toBeCalled()

    wrapper
      .find(TouchableOpacity)
      .at(1)
      .prop('onPress')!({} as GestureResponderEvent)

    await wait(0)
    wrapper.update()

    expect(props.setSignUpUserGender).toBeCalledWith({ variables: { gender: 'male' } })
    expect(props.setSignUpUserGender).toBeCalled()
  })
})
