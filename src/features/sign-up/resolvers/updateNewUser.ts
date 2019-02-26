import gql from 'graphql-tag'
import { NEW_USER_TYPENAME } from '../constants'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { removedUndefinedProps } from '../../../helpers'

const updateNewUser = (
  _: any,
  newUser: NewUser,
  { cache, getCacheKey }: { cache: InMemoryCache; getCacheKey: (...args: any[]) => string }
) => {
  const id = getCacheKey({ __typename: NEW_USER_TYPENAME, id: '0' })
  const fragment = gql`
    fragment newUserQuery on NewUser {
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
  `
  const data = cache.readFragment({ id, fragment })

  cache.writeFragment({
    id,
    fragment,
    data: { ...data, ...removedUndefinedProps(newUser), __typename: NEW_USER_TYPENAME },
  })

  return null
}

export default updateNewUser
