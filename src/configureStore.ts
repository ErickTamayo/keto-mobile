import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import app from './reducers'

export default (): Store => createStore(app, applyMiddleware(thunk))
