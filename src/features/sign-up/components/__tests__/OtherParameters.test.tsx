import * as React from 'react'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { mount } from 'enzyme'
import { NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation'
import { MockedProvider } from 'react-apollo/test-utils'
import wait from 'waait'

import { GET_SIGN_UP_USER_OTHER_PARAMETERS } from '../../queries'
import { SET_SIGN_UP_USER_OTHER_PARAMETERS } from '../../mutations'

import OtherParameters, { Props } from '../OtherParameters'

describe('<OtherParameters />', () => {
  it('renders correctly', async () => {
    const props: Props = {
      navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
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
              height: { unit: 'imperial', cm: 1, ft: 1, in: 1 },
              weight: { unit: 'imperial', lbs: 1, kg: 1 },
              weightGoal: { unit: 'imperial', lbs: 1, kg: 1 },
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

  // it('selects female on press the first radio button', async () => {
  //   const props: Props = {
  //     navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
  //     gender: null,
  //     setGender: jest.fn(),
  //   }

  //   const mocks = [
  //     {
  //       request: {
  //         query: SET_SIGN_UP_USER_GENDER,
  //         variables: { gender: 'female' },
  //       },
  //       result: {
  //         data: {
  //           setGender: { id: '0', gender: 'female' },
  //         },
  //       },
  //     },
  //     {
  //       request: {
  //         query: GET_SIGN_UP_USER_GENDER,
  //         variables: {},
  //       },
  //       result: {
  //         data: {
  //           signUpUser: { gender: null },
  //         },
  //       },
  //     },
  //   ]

  //   const wrapper = mount(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <GenderSelection {...props} />
  //     </MockedProvider>
  //   )

  //   await wait(0)
  //   wrapper.update()

  //   expect(props.setGender).not.toBeCalled()

  //   wrapper
  //     .find(TouchableOpacity)
  //     .at(0)
  //     .prop('onPress')!({} as GestureResponderEvent)

  //   await wait(0)
  //   wrapper.update()

  //   expect(props.setGender).toBeCalledWith({ variables: { gender: 'female' } })
  //   expect(props.setGender).toBeCalled()
  // })

  // it('selects male on press the second radio button', async () => {
  //   const props: Props = {
  //     navigation: {} as NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>,
  //     gender: null,
  //     setGender: jest.fn(),
  //   }

  //   const mocks = [
  //     {
  //       request: {
  //         query: SET_SIGN_UP_USER_GENDER,
  //         variables: { gender: 'female' },
  //       },
  //       result: {
  //         data: {
  //           setGender: { id: '0', gender: 'female' },
  //         },
  //       },
  //     },
  //     {
  //       request: {
  //         query: GET_SIGN_UP_USER_GENDER,
  //         variables: {},
  //       },
  //       result: {
  //         data: {
  //           signUpUser: { gender: null },
  //         },
  //       },
  //     },
  //   ]

  //   const wrapper = mount(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <GenderSelection {...props} />
  //     </MockedProvider>
  //   )

  //   await wait(0)
  //   wrapper.update()

  //   expect(props.setGender).not.toBeCalled()

  //   wrapper
  //     .find(TouchableOpacity)
  //     .at(1)
  //     .prop('onPress')!({} as GestureResponderEvent)

  //   await wait(0)
  //   wrapper.update()

  //   expect(props.setGender).toBeCalledWith({ variables: { gender: 'male' } })
  //   expect(props.setGender).toBeCalled()
  // })
})
