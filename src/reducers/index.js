import { combineReducers } from 'redux'
import {
  posts,
  fetchPostsFailure,
  isFetchingPosts
} from './postsReducers'

export default combineReducers({
  posts,
  fetchPostsFailure,
  isFetchingPosts
})