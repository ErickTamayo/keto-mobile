import React, { Component, JSXElementConstructor } from 'react'
import { Mutation, MutationResult } from 'react-apollo'
import { CREATE_USER } from '../mutations'
import { ApolloError } from 'apollo-boost'
import omitDeep from 'omit-deep'

export interface WithCreateUserMutationProps {
  createUser: (newUser: NewUser) => Promise<any>
  setCreateUserHandlers: (errorHandler: ErrorHandler, completedHandler: CompletedHandler) => void
  createUserResult: {
    data: any
    loading: boolean
    error: ApolloError
  }
}

type ErrorHandler = (error: ApolloError) => void
type CompletedHandler = (data: Record<string, any>) => void

const withCreateUserMutation = <T, WithCreateUserMutationProps extends keyof T>(
  WrappedComponent: JSXElementConstructor<T>
) => {
  return class extends Component<Omit<T, WithCreateUserMutationProps>> {
    errorHandler?: ErrorHandler
    completedHandler?: CompletedHandler

    private setHandlers = (errorHandler: ErrorHandler, completedHandler: CompletedHandler) => {
      this.errorHandler = errorHandler
      this.completedHandler = completedHandler
    }

    handleOnError = (error: ApolloError) => {
      this.errorHandler && this.errorHandler(error)
    }

    handleOnCompleted = (data: Record<string, any>) => {
      this.completedHandler && this.completedHandler(data)
    }

    render() {
      return (
        <Mutation
          mutation={CREATE_USER}
          onError={this.handleOnError}
          onCompleted={this.handleOnCompleted}
        >
          {(createUser, createUserResult: MutationResult) => (
            <WrappedComponent
              createUser={(newUser: NewUser) =>
                // TODO: omitDeep MUTATES the object, MUST FIX THIS
                // If the mutation fails and the user tries to go back an edit
                // it will fail because __typename is removed
                createUser({ variables: omitDeep(newUser, '__typename') })
              }
              createUserResult={createUserResult}
              setCreateUserHandlers={this.setHandlers}
              {...this.props as T}
            />
          )}
        </Mutation>
      )
    }
  }
}

export default withCreateUserMutation
