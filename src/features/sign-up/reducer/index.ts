import { SELECT_GENDER } from '../constants'
import { SelectGender } from '../actions'
import SignUpState from '../records/SignUpState'

export type SignUpAction = SelectGender

export default function signUpReducer(
  state: SignUpState = new SignUpState(),
  action: SignUpAction
): SignUpState {
  switch (action.type) {
    case SELECT_GENDER:
      return state.set('gender', action.gender)
    default:
      return state
  }
}
