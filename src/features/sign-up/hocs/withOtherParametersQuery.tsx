import React, { Component, ComponentType, JSXElementConstructor } from 'react'
import { Query } from 'react-apollo'
import { GET_SIGN_UP_USER_OTHER_PARAMETERS } from '../queries'

export interface WithOtherParametersQueryProps {
  age: number | null
  height: Height
  weight: Weight
  weightGoal: Weight
}

const withOtherParametersQuery = <T, WithOtherParametersQueryProps extends keyof T>(
  WrappedComponent: JSXElementConstructor<T>
) => {
  return class extends Component<Omit<T, WithOtherParametersQueryProps>> {
    render() {
      return (
        <Query query={GET_SIGN_UP_USER_OTHER_PARAMETERS}>
          {({ data, loading }) => {
            if (loading) return null

            const {
              signUpUser: { age, height, weight, weightGoal },
            } = data

            return (
              <WrappedComponent
                age={age}
                height={height}
                weight={weight}
                weightGoal={weightGoal}
                {...this.props as T}
              />
            )
          }}
        </Query>
      )
    }
  }
}

export default withOtherParametersQuery
