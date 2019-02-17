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
import { GET_SIGN_UP_USER_OTHER_PARAMETERS } from '../../queries'

import OtherParameters, { Props } from '../OtherParameters'

describe('<OtherParameters />', () => {
  it('renders correctly', async () => {
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      age: null,
      height: { unit: 'imperial', centimeters: null, feet: null, inches: null },
      weight: { unit: 'imperial', pounds: null, kilograms: null },
      weightGoal: { unit: 'imperial', pounds: null, kilograms: null },
      setSignUpUserOtherParameters: jest.fn(),
    }

    const mocks = [
      {
        request: {
          query: GET_SIGN_UP_USER_OTHER_PARAMETERS,
          variables: {},
        },
        result: {
          data: {
            signUpUser: {
              age: null,
              height: { unit: 'imperial', centimeters: 1, feet: 1, inches: 1 },
              weight: { unit: 'imperial', pounds: 1, kilograms: 1 },
              weightGoal: { unit: 'imperial', pounds: 1, kilograms: 1 },
            },
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

  it('calls setSignUpUserOtherParameters with empty data on PressableInput onClear', async () => {
    const setSignUpUserOtherParametersMock = jest.fn()
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      age: null,
      height: { unit: 'imperial', centimeters: null, feet: null, inches: null },
      weight: { unit: 'imperial', pounds: null, kilograms: null },
      weightGoal: { unit: 'imperial', pounds: null, kilograms: null },
      setSignUpUserOtherParameters: setSignUpUserOtherParametersMock,
    }

    const mocks = [
      {
        request: {
          query: GET_SIGN_UP_USER_OTHER_PARAMETERS,
          variables: {},
        },
        result: {
          data: {
            signUpUser: {
              age: null,
              height: { unit: 'imperial', centimeters: 1, feet: 1, inches: 1 },
              weight: { unit: 'imperial', pounds: 1, kilograms: 1 },
              weightGoal: { unit: 'imperial', pounds: 1, kilograms: 1 },
            },
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

    expect(setSignUpUserOtherParametersMock.mock.calls).toEqual([
      [
        {
          variables: {
            age: null,
          },
        },
      ],
      [
        {
          variables: {
            height: {
              unit: 'imperial',
              centimeters: null,
              feet: null,
              inches: null,
            },
          },
        },
      ],
      [
        {
          variables: {
            weight: {
              unit: 'imperial',
              pounds: null,
              kilograms: null,
            },
          },
        },
      ],
      [
        {
          variables: {
            weightGoal: {
              unit: 'imperial',
              pounds: null,
              kilograms: null,
            },
          },
        },
      ],
    ])
  })

  it('opens the modal with data on PressableInput onPress', async () => {
    const navigateMock = jest.fn()

    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      age: 1,
      height: { unit: 'imperial', centimeters: 1, feet: 1, inches: 1 },
      weight: { unit: 'imperial', pounds: 1, kilograms: 1 },
      weightGoal: { unit: 'imperial', pounds: 1, kilograms: 1 },
      setSignUpUserOtherParameters: () => {},
    }

    props.navigation.navigate = navigateMock

    const mocks = [
      {
        request: {
          query: GET_SIGN_UP_USER_OTHER_PARAMETERS,
          variables: {},
        },
        result: {
          data: {
            signUpUser: {
              age: null,
              height: { unit: 'imperial', centimeters: 1, feet: 1, inches: 1 },
              weight: { unit: 'imperial', pounds: 1, kilograms: 1 },
              weightGoal: { unit: 'imperial', pounds: 1, kilograms: 1 },
            },
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
      unit: 'imperial',
      centimeters: 1,
      feet: 1,
      inches: 1,
    })

    expect(navigateMock.mock.calls[2][1]['component']).toEqual(WeightSelectionModal)
    expect(navigateMock.mock.calls[2][1]['props']['weight']).toEqual({
      unit: 'imperial',
      pounds: 1,
      kilograms: 1,
    })

    expect(navigateMock.mock.calls[3][1]['component']).toEqual(WeightSelectionModal)
    expect(navigateMock.mock.calls[3][1]['props']['weight']).toEqual({
      unit: 'imperial',
      pounds: 1,
      kilograms: 1,
    })
  })

  it('calls setSignUpUserOtherParameters when PressableInput onSelect is called', async () => {
    const setSignUpUserOtherParametersMock = jest.fn()
    const navigateMock = jest.fn()

    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      age: 1,
      height: { unit: 'imperial', centimeters: 1, feet: 1, inches: 1 },
      weight: { unit: 'imperial', pounds: 1, kilograms: 1 },
      weightGoal: { unit: 'imperial', pounds: 1, kilograms: 1 },
      setSignUpUserOtherParameters: setSignUpUserOtherParametersMock,
    }

    props.navigation.navigate = navigateMock

    const mocks = [
      {
        request: {
          query: GET_SIGN_UP_USER_OTHER_PARAMETERS,
          variables: {},
        },
        result: {
          data: {
            signUpUser: {
              age: null,
              height: { unit: 'imperial', centimeters: 1, feet: 1, inches: 1 },
              weight: { unit: 'imperial', pounds: 1, kilograms: 1 },
              weightGoal: { unit: 'imperial', pounds: 1, kilograms: 1 },
            },
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
      unit: 'imperial',
      feet: 2,
      inches: 2,
      centimeters: 2,
    })

    wrapper
      .find(PressableInput)
      .at(2)
      .prop('onPress')!({} as GestureResponderEvent)

    navigateMock.mock.calls[2][1]['props']['onSelect']({
      unit: 'imperial',
      pounds: 3,
      kilograms: 3,
    })

    wrapper
      .find(PressableInput)
      .at(3)
      .prop('onPress')!({} as GestureResponderEvent)

    navigateMock.mock.calls[3][1]['props']['onSelect']({
      unit: 'imperial',
      pounds: 4,
      kilograms: 4,
    })

    expect(setSignUpUserOtherParametersMock.mock.calls[0][0]).toEqual({ variables: { age: 1 } })

    expect(setSignUpUserOtherParametersMock.mock.calls[1][0]).toEqual({
      variables: {
        height: {
          centimeters: 2,
          feet: 2,
          inches: 2,
          unit: 'imperial',
        },
      },
    })

    expect(setSignUpUserOtherParametersMock.mock.calls[2][0]).toEqual({
      variables: {
        weight: {
          pounds: 3,
          kilograms: 3,
          unit: 'imperial',
        },
      },
    })

    expect(setSignUpUserOtherParametersMock.mock.calls[3][0]).toEqual({
      variables: {
        weightGoal: {
          pounds: 4,
          kilograms: 4,
          unit: 'imperial',
        },
      },
    })
  })

  it.only('navigates to the AccountCreation screen once Continue button is pressed', async () => {
    const navigateMock = jest.fn()
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
      age: null,
      height: { unit: 'imperial', centimeters: null, feet: null, inches: null },
      weight: { unit: 'imperial', pounds: null, kilograms: null },
      weightGoal: { unit: 'imperial', pounds: null, kilograms: null },
      setSignUpUserOtherParameters: jest.fn(),
    }

    props.navigation.navigate = navigateMock

    const mocks = [
      {
        request: {
          query: GET_SIGN_UP_USER_OTHER_PARAMETERS,
          variables: {},
        },
        result: {
          data: {
            signUpUser: {
              age: null,
              height: { unit: 'imperial', centimeters: 1, feet: 1, inches: 1 },
              weight: { unit: 'imperial', pounds: 1, kilograms: 1 },
              weightGoal: { unit: 'imperial', pounds: 1, kilograms: 1 },
            },
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
