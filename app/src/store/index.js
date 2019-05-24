import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const withDebugTools = 
    (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(
    rootReducer, 
    // applyMiddleware(thunk, logger) |> withDebugTools
    withDebugTools( applyMiddleware(thunk, logger) ) 
)

