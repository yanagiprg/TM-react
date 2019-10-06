import PostActionTypes from './post.types'

export const fetchPostsSuccess = posts => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  posts
})

export const fetchPostsFailure = bool => ({
  type: PostActionTypes.FETCH_POSTS_FAILURE,
  fetchPostsFailure: bool
})

export const isFetchingPosts = bool => ({
  type: PostActionTypes.IS_FETCHING_POSTS,
  isFetchingPosts: bool
})

export const isAddingPost = bool => ({
  type: PostActionTypes.IS_ADDING_POST,
  isAddingPost: bool
})

export const addPostSuccess = post => ({
  type: PostActionTypes.ADD_POST_SUCCESS,
  post
})

export const addPostFailure = bool => ({
  type: PostActionTypes.ADD_POST_FAILURE,
  addPostFailure: bool
})

export const fetchPostSuccess = post => ({
  type: PostActionTypes.FETCH_POST_SUCCESS,
  post
})

export const fetchPostFailure = bool => ({
  type: PostActionTypes.FETCH_POST_FAILURE,
  fetchPostFailure: bool
})

export const isFetchingPost = bool => ({
  type: PostActionTypes.IS_FETCHING_POST,
  isFetchingPost: bool
})

export const deletePostSuccess = id => ({
  type: PostActionTypes.DELETE_POST_SUCCESS,
  id
})

export const updatePostSuccess = post => ({
  type: PostActionTypes.UPDATE_POST_SUCCESS,
  post
})
