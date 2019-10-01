import {
  FETCH_POSTS_SUCCESS,
  IS_FETCHING_POSTS,
  FETCH_POSTS_FAILURE,
  ADD_POST_SUCCESS,
  IS_ADDING_POST,
  ADD_POST_FAILURE,
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
      case ADD_POST_SUCCESS:
        return [action.post, ...state]; 
      default: 
        return state;
  }
}

export function isAddingPost(state = false, action) {
  switch (action.type) {
    case IS_ADDING_POST:
      return action.isAddingPost;
    default:
      return state;
  }
}

export function addPostFailure(state = false, action) {
  switch (action.type) {
    case ADD_POST_FAILURE:
      return action.addPostFailure;
    default:
      return state;
  }
}