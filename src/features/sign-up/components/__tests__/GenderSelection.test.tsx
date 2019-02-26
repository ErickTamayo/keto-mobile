import React from 'react'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { mount } from 'enzyme'
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation'
import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import { GET_NEW_USER } from '../../queries'
import GenderSelection, { Props } from '../GenderSelection'
import defaults from '../../defaults'

const newUser = defaults.newUser

describe('<GenderSelection />', () => {
  it('renders correctly', async () => {
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      newUser: {
        gender: null,
      },
      updateNewUser: jest.fn(),
    }

    const mocks = [
      {
        request: {
          query: GET_NEW_USER,
          variables: {},
        },
        result: {
          data: {
            newUser,
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
      newUser: {
        gender: null,
      },
      updateNewUser: jest.fn(),
    }

    const mocks = [
      {
        request: {
          query: GET_NEW_USER,
          variables: {},
        },
        result: {
          data: {
            newUser,
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

    expect(props.updateNewUser).not.toBeCalled()

    wrapper
      .find(TouchableOpacity)
      .at(0)
      .prop('onPress')!({} as GestureResponderEvent)

    await wait(0)
    wrapper.update()

    expect(props.updateNewUser).toBeCalledWith({ gender: 'FEMALE' })
    expect(props.updateNewUser).toBeCalled()
  })

  it('selects male on press the second radio button', async () => {
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      newUser: {
        gender: null,
      },
      updateNewUser: jest.fn(),
    }

    const mocks = [
      {
        request: {
          query: GET_NEW_USER,
          variables: {},
        },
        result: {
          data: {
            newUser,
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

    expect(props.updateNewUser).not.toBeCalled()

    wrapper
      .find(TouchableOpacity)
      .at(1)
      .prop('onPress')!({} as GestureResponderEvent)

    await wait(0)
    wrapper.update()

    expect(props.updateNewUser).toBeCalledWith({ gender: 'MALE' })
    expect(props.updateNewUser).toBeCalled()
  })
})
