import React from 'react'
import { Provider } from 'react-redux'
import { Font } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import defaults from './graphql/defaults'
import resolvers from './graphql/resolvers'

import configureStore from './store'

const store = configureStore()
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  clientState: {
    defaults,
    resolvers,
  },
})

interface State {
  fontLoaded: boolean
}

export default class App extends React.Component<{}, State> {
  public state = {
    fontLoaded: false,
  }

  public async componentDidMount(): Promise<void> {
    await Font.loadAsync({
      'avenir-next-regular': require('./assets/fonts/AvenirNext-Regular.ttf'), // eslint-disable-line global-require
      'avenir-next-medium': require('./assets/fonts/AvenirNext-Medium.ttf'), // eslint-disable-line global-require
    })

    this.setState({ fontLoaded: true }) // eslint-disable-line react/no-did-mount-set-state
  }

  public render(): JSX.Element {
    // TODO put a spinner
    const { fontLoaded } = this.state
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>{fontLoaded && <AppNavigator />}</Provider>
      </ApolloProvider>
    )
  }
}
