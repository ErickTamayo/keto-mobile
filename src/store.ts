import { combineReducers, createStore, applyMiddleware, Store, Reducer, AnyAction } from 'redux'
import thunk from 'redux-thunk'

import StartScreenReducer from './features/start-screen/reducer'
import StartScreenState from './features/start-screen/records/StartScreenState'
import { USER_LOGOUT } from './features/start-screen/constants'

const startScreen: Reducer<StartScreenState> = StartScreenReducer

const appReducer = combineReducers({
  startScreen,
})

const rootReducer = (
  state:
    | {
        startScreen: StartScreenState
      }
    | undefined,
  action: AnyAction
) => {
  // Resetting the whole app when user logs out
  if (action.type === USER_LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default (): Store => createStore(rootReducer, applyMiddleware(thunk))
