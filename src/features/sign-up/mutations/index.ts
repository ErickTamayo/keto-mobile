import gql from 'graphql-tag'

export const SET_SIGN_UP_USER_GENDER = gql`
  mutation setSignUpUserGender($gender: String!) {
    setSignUpUserGender(gender: $gender) @client
  }
`

export const SET_SIGN_UP_USER_OTHER_PARAMETERS = gql`
  mutation setSignUpUserOtherParameters(
    $age: String!
    $height: Height!
    $weight: Weight!
    $weightGoal: Weight!
  ) {
    setSignUpUserOtherParameters(
      age: $age
      height: $height
      weight: $weight
      weightGoal: $weightGoal
    ) @client
  }
`
