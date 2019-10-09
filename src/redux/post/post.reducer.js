import PostActionTypes from './post.types'

// 処理に成功して表示する
// 配列に格納
export const posts = (state = [], action) => {
  switch (action.type) {
      // postIndex
      case PostActionTypes.FETCH_POSTS_SUCCESS: 
        return action.posts
      // postNew
      case PostActionTypes.ADD_POST_SUCCESS:
        return [action.post, ...state];
      // postDelete
      case PostActionTypes.DELETE_POST_SUCCESS:
        return state.filter(post => post.id !== action.id);
      // postEdit
      case PostActionTypes.UPDATE_POST_SUCCESS:
        return state.map((post) => {
          if (post.id === action.post.id) {
            return {
              ...post,
              ...action.post
            }
          } else return post;
        })
      // その他
      default: 
        return state;
  }
}

// 投稿に成功（postNew, postEdit）
// Objectに格納
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

// 更新している時｜失敗した時で状態をもたせたくない時
export const postReducer = (state = false, action) => {
  switch (action.type) {
    // postIndex
    case PostActionTypes.FETCHING_POSTS:
      return action.fetchingPosts;
    case PostActionTypes.FETCH_POSTS_FAILURE:
      return action.fetchPostsFailure;
    // postNew
    case PostActionTypes.ADDING_POST:
      return action.addingPost;
    case PostActionTypes.ADD_POST_FAILURE:
      return action.addPostFailure;
    // postShow & postEdit
    case PostActionTypes.FETCHING_POST:
      return action.fetchingPost;
    case PostActionTypes.FETCH_POST_FAILURE:
      return action.fetchPostFailure;
    default:
      return state;
  }
}



