import React from 'react'
import { Provider } from 'react-redux'
import StartScreen from './features/start-screen/containers/StartScreen'
import { configureStore } from './store'

const store = configureStore()

export default (): JSX.Element => (
  <Provider store={store}>
    <StartScreen />
  </Provider>
)
