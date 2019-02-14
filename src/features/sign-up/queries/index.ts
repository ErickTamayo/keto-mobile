import gql from 'graphql-tag'

export const GET_SIGN_UP_USER_GENDER = gql`
  {
    signUpUser @client {
      gender
    }
  }
`

export const GET_SIGN_UP_USER_OTHER_PARAMETERS = gql`
  {
    signUpUser @client {
      age
      height {
        unit
        ft
        in
        cm
      }
      weight {
        unit
        lbs
        kg
      }
      weightGoal {
        unit
        lbs
        kg
      }
    }
  }
`
