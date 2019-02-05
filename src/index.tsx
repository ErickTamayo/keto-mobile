import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import StartScreen from './features/start-screen/containers/StartScreen'

const store = configureStore()

export default (): JSX.Element => (
  <Provider store={store}>
    <StartScreen />
  </Provider>
)
