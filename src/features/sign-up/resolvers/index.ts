import setSignUpUserGender from './setSignUpGender'
import setSignUpUserOtherParameters from './setSignUpUserOtherParameters'

const resolvers = {
  Mutation: {
    setSignUpUserGender,
    setSignUpUserOtherParameters,
  },
}

export default resolvers
