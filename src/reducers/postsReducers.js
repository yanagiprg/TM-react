import {
  FETCH_POSTS_SUCCESS,
  IS_FETCHING_POSTS,
  FETCH_POSTS_FAILURE
} from '../actions'

export function isFetchingPosts(state = false, action) {
  switch (action.type) {
      case IS_FETCHING_POSTS:
        return action.isFetchingPosts;
      default:
        return state;
  }
}

export function fetchPostsFailure(state = false, action) {
  switch (action.type) {
      case FETCH_POSTS_FAILURE:
        return action.fetchPostsFailure;
      default:
        return state;
  }
}

export function posts(state = [], action) {
  switch (action.type) {
      case FETCH_POSTS_SUCCESS: 
        return action.posts
      default: 
        return state;
  }
}