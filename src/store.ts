import { combineReducers, createStore, applyMiddleware, Store, Reducer, AnyAction } from 'redux'
import thunk from 'redux-thunk'

import StartScreenReducer from './features/start-screen/reducer'
import StartScreenState from './features/start-screen/records/StartScreenState'
import { USER_LOGOUT } from './features/start-screen/constants'

import SignUpState from './features/sign-up/records/SignUpState'
import SignUpReducer, { SignUpAction } from './features/sign-up/reducer'
import StartScreen from './features/start-screen/components/StartScreen'

const startScreen: Reducer<StartScreenState> = StartScreenReducer
const signUp: Reducer<SignUpState, SignUpAction> = SignUpReducer

const appReducer = combineReducers({
  startScreen,
  signUp,
})

const rootReducer = (
  state:
    | {
        startScreen: StartScreenState
        signUp: SignUpState
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
