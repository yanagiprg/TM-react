import { combineReducers } from 'redux'
import {
  posts,
  fetchPostsFailure,
  isFetchingPosts,
  isAddingPost,
  addPostFailure,
} from './postsReducers'

export default combineReducers({
  posts,
  fetchPostsFailure,
  isFetchingPosts,
  isAddingPost,
  addPostFailure,
})