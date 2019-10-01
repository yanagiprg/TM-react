import axios from 'axios'

const apiUrl = 'http://localhost:3001'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const IS_FETCHING_POSTS = 'IS_FETCHING_POSTS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

// action creators
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

// async action creator
export const getPosts = () => {
  return (dispatch) => {
    dispatch(isFetchingPosts(true))
    return axios.get(`${apiUrl}/posts`)
      .then((response) => {
        dispatch(isFetchingPosts(false))
        dispatch(fetchPostsSuccess(response.data))
      })
      .catch((error) => {
        dispatch(isFetchingPosts(false))
        dispatch(fetchPostsFailure(true))
      })
  }
}