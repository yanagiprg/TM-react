import axios from 'axios'
import history from '../history'

const apiUrl = 'http://localhost:3001'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const IS_FETCHING_POSTS = 'IS_FETCHING_POSTS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
export const IS_ADDING_POST = 'IS_ADDING_POST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const IS_FETCHING_POST = 'IS_FETCHING_POST'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'

const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts
})

const fetchPostsFailure = (bool) => ({
  type: FETCH_POSTS_FAILURE,
  fetchPostsFailure: bool
})

const isFetchingPosts = (bool) => ({
  type: IS_FETCHING_POSTS,
  isFetchingPosts: bool
})

const isAddingPost = (bool) => ({
  type: IS_ADDING_POST,
  isAddingPost: bool
})

const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  post
})

const addPostFailure = (bool) => ({
  type: ADD_POST_FAILURE,
  addPostFailure: bool
})

const fetchPostSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  post
})

const fetchPostFailure = (bool) => ({
  type: FETCH_POST_FAILURE,
  fetchPostFailure: bool
})

const isFetchingPost = (bool) => ({
  type: IS_FETCHING_POST,
  isFetchingPost: bool
})

const deletePostSuccess = id => ({
  type: DELETE_POST_SUCCESS,
  id
})

const updatePostSuccess = post => ({
  type: UPDATE_POST_SUCCESS,
  post
})

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(isFetchingPosts(true))
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      dispatch(isFetchingPosts(false));
      dispatch(fetchPostsSuccess(response.data));
    }
    catch (error) {
      dispatch(isFetchingPosts(false));
      dispatch(fetchPostsFailure(true));
    }
  }
}

export const addPost = ({title, content})  => {
  return async (dispatch) => {
    dispatch(isAddingPost(true))
    try {
      let response = await axios.post(`${apiUrl}/posts`, { title, content });
      dispatch(isAddingPost(false));
      const { data } = response;
      const newPost = { id: data.id, title: data.title, content: data.content };
      dispatch(addPostSuccess(newPost));
      history.push("/");
    }
    catch (error) {
      dispatch(isAddingPost(false));
      dispatch(addPostFailure(true));
    }
  }}

  export const getPost = id => {
    return async (dispatch) => {
      dispatch(isFetchingPost(true))
      try {
        const response = await axios.get(`${apiUrl}/posts/${id}`);
        dispatch(isFetchingPost(false));
        dispatch(fetchPostSuccess(response.data));
      }
      catch (error) {
        dispatch(isFetchingPost(false));
        dispatch(fetchPostFailure(true));
      }
    }
  }

  export const deletePost = id => {
    return async (dispatch) => {
      const response = await axios.delete(`${apiUrl}/posts/${id}`);
      dispatch(deletePostSuccess(id));
      history.push("/");
    }
  }

  export const updatePost = post => {
    const { id, title, content } = post
    return async (dispatch) => {
      const response = await axios.patch(`${apiUrl}/posts/${id}`, {title, content})
      const data = response.data
      dispatch(updatePostSuccess(data))
      history.push(`/posts/${post.id}`)
    }
  }