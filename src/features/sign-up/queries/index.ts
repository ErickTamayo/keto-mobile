import gql from 'graphql-tag'

export const GET_NEW_USER = gql`
  {
    newUser @client {
      displayName
      email
      password
      gender
      age
      height {
        unit
        feet
        inches
        centimeters
      }
      weight {
        unit
        pounds
        kilograms
      }
      weightGoal {
        unit
        pounds
        kilograms
      }
    }
  }
`
