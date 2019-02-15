import { SIGN_UP_USER_TYPENAME, HEIGHT_TYPENAME, WEIGHT_TYPENAME } from '../constants'

const signUpUser = {
  id: '0',
  gender: null,
  age: null,
  height: {
    unit: 'imperial',
    ft: 5,
    in: 11,
    cm: 178,
    __typename: HEIGHT_TYPENAME,
  },
  weight: {
    unit: 'imperial',
    lbs: 357,
    kg: 116,
    __typename: WEIGHT_TYPENAME,
  },
  weightGoal: {
    unit: 'imperial',
    lbs: 357,
    kg: 116,
    __typename: WEIGHT_TYPENAME,
  },
  __typename: SIGN_UP_USER_TYPENAME,
}

const defaults = {
  signUpUser,
}

export default defaults
