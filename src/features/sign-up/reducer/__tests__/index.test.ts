import reducer from '..'
import SignUpState from '../../records/SignUpState'
import { SELECT_GENDER } from '../../constants'

describe('feature/sign-up reducer', () => {
  let initialState: SignUpState

  beforeEach(() => {
    initialState = new SignUpState({ gender: 'male' })
  })

  it('increments counter', () => {
    const updatedState = reducer(initialState, {
      type: SELECT_GENDER,
      gender: 'female',
    })

    const expectedState = initialState.set('gender', 'female')

    expect(updatedState).toEqual(expectedState)
  })
})
