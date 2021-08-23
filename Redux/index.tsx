import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export type RootState = ReturnType<typeof rootReducer>
let store = createStore(rootReducer, applyMiddleware(thunk))

export default store