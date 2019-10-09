import { combineReducers } from 'redux'


// exportされたreducerとstoreを結びつけるためのもの
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