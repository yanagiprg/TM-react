import PostActionTypes from './post.types'

// postIndex
export const fetchPostsSuccess = posts => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  posts
})

export const fetchingPosts = bool => ({
  type: PostActionTypes.FETCHING_POSTS,
  fetchingPosts: bool
})

export const fetchPostsFailure = bool => ({
  type: PostActionTypes.FETCH_POSTS_FAILURE,
  fetchPostsFailure: bool
})

// postNew
export const addPostSuccess = post => ({
  type: PostActionTypes.ADD_POST_SUCCESS,
  post
})

export const addingPost = bool => ({
type: PostActionTypes.ADDING_POST,
addingPost: bool
})

export const addPostFailure = bool => ({
  type: PostActionTypes.ADD_POST_FAILURE,
  addPostFailure: bool
})

// postShow
export const fetchPostSuccess = post => ({
  type: PostActionTypes.FETCH_POST_SUCCESS,
  post
})

export const fetchingPost = bool => ({
  type: PostActionTypes.FETCHING_POST,
  fetchingPost: bool
})

export const fetchPostFailure = bool => ({
  type: PostActionTypes.FETCH_POST_FAILURE,
  fetchPostFailure: bool
})

// postDelete
export const deletePostSuccess = id => ({
  type: PostActionTypes.DELETE_POST_SUCCESS,
  id
})

// postUpdate
export const updatePostSuccess = post => ({
  type: PostActionTypes.UPDATE_POST_SUCCESS,
  post
})
