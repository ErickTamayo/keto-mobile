import { SIGN_UP_USER_TYPENAME, HEIGHT_TYPENAME, WEIGHT_TYPENAME } from '../constants'

const signUpUser = {
  id: '0',
  gender: null,
  age: null,
  height: {
    unit: 'imperial',
    feet: null,
    inches: null,
    centimeters: null,
    __typename: HEIGHT_TYPENAME,
  },
  weight: {
    unit: 'imperial',
    pounds: null,
    kilograms: null,
    __typename: WEIGHT_TYPENAME,
  },
  weightGoal: {
    unit: 'imperial',
    pounds: null,
    kilograms: null,
    __typename: WEIGHT_TYPENAME,
  },
  __typename: SIGN_UP_USER_TYPENAME,
}

const defaults = {
  signUpUser,
}

export default defaults
