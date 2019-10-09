import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import rootReducer from './redux/root-reducer'

// ReduxとReduxThunkを使うためにstoreを定義
const store = createStore(rootReducer, applyMiddleware(thunk))

// AppComponentにStoreを適用させる
ReactDOM.render(<App store={store} />, document.getElementById('root'))