import axios from 'axios'
import history from '../../history'

import {
  isFetchingPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
  isAddingPost,
  addPostSuccess,
  addPostFailure,
  isFetchingPost,
  fetchPostSuccess,
  fetchPostFailure,
  deletePostSuccess,
  updatePostSuccess,
} from './post.actions'

const apiUrl = 'http://localhost:3001'

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

export const addPost = ({ title, content }) => {
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
  }
}

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