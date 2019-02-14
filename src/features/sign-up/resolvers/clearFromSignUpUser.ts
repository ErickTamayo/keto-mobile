import gql from 'graphql-tag'
import { SIGN_UP_USER_TYPENAME, HEIGHT_TYPENAME, WEIGHT_TYPENAME } from '../constants'

const clearAge = (id, cache) => {
  const fragment = gql`
    fragment selectAge on SignUpUser {
      age
    }
  `

  cache.writeFragment({ id, fragment, data: { age: null, __typename: SIGN_UP_USER_TYPENAME } })
  return null
}

const clearHeight = (id, cache) => {
  const fragment = gql`
    fragment selectHeight on SignUpUser {
      height {
        ft
        in
        cm
      }
    }
  `

  cache.writeFragment({
    id,
    fragment,
    data: {
      height: {
        ft: null,
        in: null,
        cm: null,
        __typename: HEIGHT_TYPENAME,
      },
      __typename: SIGN_UP_USER_TYPENAME,
    },
  })
  return null
}

const clearWeight = (id, cache) => {
  const fragment = gql`
    fragment selectWeight on SignUpUser {
      weight {
        lbs
        kg
      }
    }
  `

  cache.writeFragment({
    id,
    fragment,
    data: {
      weight: {
        lbs: null,
        kg: null,
        __typename: WEIGHT_TYPENAME,
      },
      __typename: SIGN_UP_USER_TYPENAME,
    },
  })
  return null
}

const clearWeightGoal = (id, cache) => {
  const fragment = gql`
    fragment selectWeightGoal on SignUpUser {
      weightGoal {
        lbs
        kg
      }
    }
  `

  cache.writeFragment({
    id,
    fragment,
    data: {
      weightGoal: {
        lbs: null,
        kg: null,
        __typename: WEIGHT_TYPENAME,
      },
      __typename: SIGN_UP_USER_TYPENAME,
    },
  })
  return null
}

const selectAgeFragment = gql`
  fragment selectAge on SignUpUser {
    age
  }
`

const clearFromSingUpUser = (_, { field }, { cache, getCacheKey }) => {
  const id = getCacheKey({ __typename: SIGN_UP_USER_TYPENAME, id: '0' })

  switch (field) {
    case 'age':
      return clearAge(id, cache)

    case 'height':
      return clearHeight(id, cache)

    case 'weight':
      return clearWeight(id, cache)

    case 'weightGoal':
      return clearWeightGoal(id, cache)

    default:
      return null
  }
}

export default clearFromSingUpUser
