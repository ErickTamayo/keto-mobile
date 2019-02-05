import { combineReducers, Reducer } from 'redux'
import StartScreenReducer from '../features/start-screen/reducer'
import StartScreenState from '../features/start-screen/records/StartScreenState'

const startScreen: Reducer<StartScreenState> = StartScreenReducer

const rootReducer = combineReducers({
  startScreen,
})

export default rootReducer
