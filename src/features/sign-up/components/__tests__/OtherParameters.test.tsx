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
      height: { unit: 'imperial', cm: null, ft: null, in: null },
      weight: { unit: 'imperial', lbs: null, kg: null },
      weightGoal: { unit: 'imperial', lbs: null, kg: null },
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

  it.skip('executes setSignUpUserOtherParameters once clear button in the input is pressed', () => {})
})
