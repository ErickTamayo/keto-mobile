import React, { Component, JSXElementConstructor } from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_ACCOUNT } from '../mutations'

export interface WithCreateUserMutationProps {
  createUser: (newUser: NewUser) => any
}

const withCreateUserMutation = <T, WithCreateUserMutationProps extends keyof T>(
  WrappedComponent: JSXElementConstructor<T>
) => {
  return class extends Component<Omit<T, WithCreateUserMutationProps>> {
    render() {
      return (
        <Mutation mutation={CREATE_ACCOUNT}>
          {createUser => (
            <WrappedComponent
              createUser={(newUser: NewUser) => createUser({ variables: newUser })}
              {...this.props as T}
            />
          )}
        </Mutation>
      )
    }
  }
}

export default withCreateUserMutation
