import gql from 'graphql-tag'

export const SET_SIGN_UP_USER_GENDER = gql`
  mutation SetGender($gender: String!) {
    setGender(gender: $gender) @client
  }
`

export const SET_SIGN_UP_USER_OTHER_PARAMETERS = gql`
  mutation setOtherParametersToSignUpUser(
    $age: String!
    $height: Height!
    $weight: Weight!
    $weightGoal: Weight!
  ) {
    setOtherParametersToSignUpUser(
      age: $age
      height: $height
      weight: $weight
      weightGoal: $weightGoal
    ) @client
  }
`
