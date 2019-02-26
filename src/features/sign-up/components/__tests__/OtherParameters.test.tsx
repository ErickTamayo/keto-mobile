import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { mount } from 'enzyme'
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation'
import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'
import PressableInput from '../../../../components/pressable-input/PressableInput'
import AgeSelectionModal from '../../modals/AgeSelectionModal'
import HeightSelectionModal from '../../modals/HeightSelectionModal'
import WeightSelectionModal from '../../modals/WeightSelectionModal'
import CardWithHeaderAndButton from '../../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import Button from '../../../../components/button/Button'
import { GET_NEW_USER } from '../../queries'
import OtherParameters, { Props } from '../OtherParameters'
import defaults from '../../defaults'

const newUser = defaults.newUser

describe('<OtherParameters />', () => {
  it('renders correctly', async () => {
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      newUser: {
        age: null,
        height: { unit: 'IMPERIAL', centimeters: null, feet: null, inches: null },
        weight: { unit: 'IMPERIAL', pounds: null, kilograms: null },
        weightGoal: { unit: 'IMPERIAL', pounds: null, kilograms: null },
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
        <OtherParameters {...props} />
      </MockedProvider>
    )

    await wait(0)
    wrapper.update()

    expect(wrapper.find(OtherParameters)).toMatchSnapshot()
  })

  it('calls updateNewUser with empty data on PressableInput onClear', async () => {
    const updateNewUser = jest.fn()
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      newUser: {
        age: null,
        height: { unit: 'IMPERIAL', centimeters: null, feet: null, inches: null },
        weight: { unit: 'IMPERIAL', pounds: null, kilograms: null },
        weightGoal: { unit: 'IMPERIAL', pounds: null, kilograms: null },
      },
      updateNewUser,
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
        <OtherParameters {...props} />
      </MockedProvider>
    )

    await wait(0)
    wrapper.update()

    wrapper.find(PressableInput).forEach(node => {
      node.prop('onClear')!({} as GestureResponderEvent)
    })

    expect(updateNewUser.mock.calls).toEqual([
      [
        {
          age: null,
        },
      ],
      [
        {
          height: {
            unit: 'IMPERIAL',
            centimeters: null,
            feet: null,
            inches: null,
          },
        },
      ],
      [
        {
          weight: {
            unit: 'IMPERIAL',
            pounds: null,
            kilograms: null,
          },
        },
      ],
      [
        {
          weightGoal: {
            unit: 'IMPERIAL',
            pounds: null,
            kilograms: null,
          },
        },
      ],
    ])
  })

  it('navigates to the modal with data on PressableInput onPress', async () => {
    const navigateMock = jest.fn()

    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      newUser: {
        age: 1,
        height: { unit: 'IMPERIAL', centimeters: 1, feet: 1, inches: 1 },
        weight: { unit: 'IMPERIAL', pounds: 1, kilograms: 1 },
        weightGoal: { unit: 'IMPERIAL', pounds: 1, kilograms: 1 },
      },
      updateNewUser: jest.fn(),
    }

    props.navigation.navigate = navigateMock

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
        <OtherParameters {...props} />
      </MockedProvider>
    )

    await wait(0)
    wrapper.update()

    wrapper.find(PressableInput).forEach(node => {
      node.prop('onPress')!({} as GestureResponderEvent)
    })

    expect(navigateMock.mock.calls[0][1]['component']).toEqual(AgeSelectionModal)
    expect(navigateMock.mock.calls[0][1]['props']['age']).toEqual(1)

    expect(navigateMock.mock.calls[1][1]['component']).toEqual(HeightSelectionModal)
    expect(navigateMock.mock.calls[1][1]['props']['height']).toEqual({
      unit: 'IMPERIAL',
      centimeters: 1,
      feet: 1,
      inches: 1,
    })

    expect(navigateMock.mock.calls[2][1]['component']).toEqual(WeightSelectionModal)
    expect(navigateMock.mock.calls[2][1]['props']['weight']).toEqual({
      unit: 'IMPERIAL',
      pounds: 1,
      kilograms: 1,
    })

    expect(navigateMock.mock.calls[3][1]['component']).toEqual(WeightSelectionModal)
    expect(navigateMock.mock.calls[3][1]['props']['weight']).toEqual({
      unit: 'IMPERIAL',
      pounds: 1,
      kilograms: 1,
    })
  })

  it('calls updateNewUser when PressableInput onSelect is called', async () => {
    const updateNewUser = jest.fn()
    const navigateMock = jest.fn()

    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      newUser: {
        age: 1,
        height: { unit: 'IMPERIAL', centimeters: 1, feet: 1, inches: 1 },
        weight: { unit: 'IMPERIAL', pounds: 1, kilograms: 1 },
        weightGoal: { unit: 'IMPERIAL', pounds: 1, kilograms: 1 },
      },
      updateNewUser,
    }

    props.navigation.navigate = navigateMock

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
        <OtherParameters {...props} />
      </MockedProvider>
    )

    await wait(0)
    wrapper.update()

    wrapper
      .find(PressableInput)
      .at(0)
      .prop('onPress')!({} as GestureResponderEvent)

    navigateMock.mock.calls[0][1]['props']['onSelect'](1)

    wrapper
      .find(PressableInput)
      .at(1)
      .prop('onPress')!({} as GestureResponderEvent)

    navigateMock.mock.calls[1][1]['props']['onSelect']({
      unit: 'IMPERIAL',
      feet: 2,
      inches: 2,
      centimeters: 2,
    })

    wrapper
      .find(PressableInput)
      .at(2)
      .prop('onPress')!({} as GestureResponderEvent)

    navigateMock.mock.calls[2][1]['props']['onSelect']({
      unit: 'IMPERIAL',
      pounds: 3,
      kilograms: 3,
    })

    wrapper
      .find(PressableInput)
      .at(3)
      .prop('onPress')!({} as GestureResponderEvent)

    navigateMock.mock.calls[3][1]['props']['onSelect']({
      unit: 'IMPERIAL',
      pounds: 4,
      kilograms: 4,
    })

    expect(updateNewUser.mock.calls[0][0]).toEqual({ age: 1 })

    expect(updateNewUser.mock.calls[1][0]).toEqual({
      height: {
        centimeters: 2,
        feet: 2,
        inches: 2,
        unit: 'IMPERIAL',
      },
    })

    expect(updateNewUser.mock.calls[2][0]).toEqual({
      weight: {
        pounds: 3,
        kilograms: 3,
        unit: 'IMPERIAL',
      },
    })

    expect(updateNewUser.mock.calls[3][0]).toEqual({
      weightGoal: {
        pounds: 4,
        kilograms: 4,
        unit: 'IMPERIAL',
      },
    })
  })

  it('navigates to the AccountCreation screen once Continue button is pressed', async () => {
    const navigateMock = jest.fn()
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      newUser: {
        age: null,
        height: { unit: 'IMPERIAL', centimeters: 1, feet: 1, inches: 1 },
        weight: { unit: 'IMPERIAL', pounds: 1, kilograms: 1 },
        weightGoal: { unit: 'IMPERIAL', pounds: 1, kilograms: 1 },
      },
      updateNewUser: jest.fn(),
    }

    props.navigation.navigate = navigateMock

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
        <OtherParameters {...props} />
      </MockedProvider>
    )

    await wait(0)
    wrapper.update()

    wrapper
      .find(CardWithHeaderAndButton)
      .find(Button)
      .prop('onPress')!({} as GestureResponderEvent)

    expect(navigateMock).toBeCalled()
    expect(navigateMock.mock.calls[0][0]).toEqual('AccountCreation')
  })
})
