import { combineReducers } from 'redux'

import {
  postReducer,
  posts,
  post,
} from './post/post.reducer'

export default combineReducers({
  postReducer,
  posts,
  post,
})