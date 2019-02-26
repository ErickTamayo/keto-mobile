import React, { Component, JSXElementConstructor } from 'react'
import { Query } from 'react-apollo'
import { GET_NEW_USER } from '../queries'

export interface WithNewUserQueryProps {
  newUser: NewUser
}

const withNewUserQuery = <T, WithNewUserQueryProps extends keyof T>(
  WrappedComponent: JSXElementConstructor<T>
) => {
  return class extends Component<Omit<T, WithNewUserQueryProps>> {
    render() {
      return (
        <Query query={GET_NEW_USER}>
          {({ data, loading }) => {
            if (loading) return null

            const { newUser }: { newUser: NewUser } = data
            return <WrappedComponent newUser={newUser} {...this.props as T} />
          }}
        </Query>
      )
    }
  }
}

export default withNewUserQuery
