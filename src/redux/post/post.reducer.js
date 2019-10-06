import PostActionTypes from './post.types'

export const posts = (state = [], action) => {
  switch (action.type) {
      case PostActionTypes.FETCH_POSTS_SUCCESS: 
        return action.posts
      case PostActionTypes.ADD_POST_SUCCESS:
        return [action.post, ...state];
      case PostActionTypes.DELETE_POST_SUCCESS:
        return state.filter(post => post.id !== action.id);
      case PostActionTypes.UPDATE_POST_SUCCESS:
        return state.map((post) => {
          if (post.id === action.post.id) {
            return {
              ...post,
              ...action.post
            }
          } else return post;
        })
      default: 
        return state;
  }
}

export const post = (state = {}, action) => {
  switch (action.type) {
      case PostActionTypes.FETCH_POST_SUCCESS:
        return action.post;
      case PostActionTypes.UPDATE_POST_SUCCESS:
        return action.post;
      default:
        return state;
  }
}
    
export const postReducer = (state = false, action) => {
  switch (action.type) {
    case PostActionTypes.IS_ADDING_POST:
      return action.isAddingPost;
    case PostActionTypes.ADD_POST_FAILURE:
      return action.addPostFailure;
    case PostActionTypes.IS_FETCHING_POSTS:
      return action.isFetchingPosts;
    case PostActionTypes.FETCH_POSTS_FAILURE:
      return action.fetchPostsFailure; 
    case PostActionTypes.IS_FETCHING_POST:
      return action.isFetchingPost;
    case PostActionTypes.FETCH_POST_FAILURE:
      return action.fetchPostFailure;
    default:
      return state;
  }
}



