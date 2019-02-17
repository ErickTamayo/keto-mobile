import React from 'react'
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

  it.skip('executes setSignUpUserOtherParameters once clear button in the input is pressed', () => {})
})
