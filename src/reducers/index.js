import { combineReducers } from 'redux'
import {
  posts,
  fetchPostsFailure,
  isFetchingPosts,
  isAddingPost,
  addPostFailure,
} from './postsReducers'

import {
  post,
  fetchPostFailure,
  isFetchingPost
} from './postReducer'

export default combineReducers({
  posts,
  fetchPostsFailure,
  isFetchingPosts,
  isAddingPost,
  addPostFailure,
  post,
  fetchPostFailure,
  isFetchingPost
})