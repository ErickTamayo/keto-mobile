import * as React from 'react'
import { Provider } from 'react-redux'
import { Font } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import configureStore from './store'

const store = configureStore()

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
    return <Provider store={store}>{fontLoaded && <AppNavigator />}</Provider>
  }
}
