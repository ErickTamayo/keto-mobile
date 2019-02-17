import gql from 'graphql-tag'
import { SIGN_UP_USER_TYPENAME } from '../constants'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { removedUndefinedProps } from '../../../helpers'

const setSignUpUserOtherParameters = (
  _: any,
  args: any,
  { cache, getCacheKey }: { cache: InMemoryCache; getCacheKey: (...args: any[]) => string }
) => {
  const id = getCacheKey({ __typename: SIGN_UP_USER_TYPENAME, id: '0' })

  const fragment = gql`
    fragment selectOtherParameters on SignUpUser {
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
    data: { ...data, ...removedUndefinedProps(args), __typename: SIGN_UP_USER_TYPENAME },
  })

  return null
}

export default setSignUpUserOtherParameters