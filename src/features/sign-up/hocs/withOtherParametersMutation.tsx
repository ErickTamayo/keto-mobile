import React, { Component, JSXElementConstructor } from 'react'
import { Mutation } from 'react-apollo'
import { SET_SIGN_UP_USER_OTHER_PARAMETERS } from '../mutations'

export interface WithOtherParametersMutationProps {
  setOtherParametersToSignUpUser: (...args: any[]) => any
}

const withOtherParametersMutation = <T, WithOtherParametersMutationProps extends keyof T>(
  WrappedComponent: JSXElementConstructor<T>
) => {
  return class extends Component<Omit<T, WithOtherParametersMutationProps>> {
    render() {
      return (
        <Mutation mutation={SET_SIGN_UP_USER_OTHER_PARAMETERS}>
          {setOtherParametersToSignUpUser => (
            <WrappedComponent
              setOtherParametersToSignUpUser={setOtherParametersToSignUpUser}
              {...this.props as T}
            />
          )}
        </Mutation>
      )
    }
  }
}

export default withOtherParametersMutation
