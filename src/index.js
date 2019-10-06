import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'
import rootReducer from './redux/root-reducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<App store={store} />, document.getElementById('root'))