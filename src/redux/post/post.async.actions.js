import axios from 'axios'
import history from '../../history'

import {
  fetchingPosts,
  fetchPostsSuccess,
  fetchPostsFailure,
  addingPost,
  addPostSuccess,
  addPostFailure,
  fetchingPost,
  fetchPostSuccess,
  fetchPostFailure,
  deletePostSuccess,
  updatePostSuccess,
} from './post.actions'

// api取得ソース
const apiUrl = 'http://localhost:3001'

export const getPosts = () => {
  // redux thunkを使用しているためgetPostsの中にdispatch関数が入る
  return async dispatch => {
    // fetchingPostsの引数にtrueが入り、
    // 投稿一覧表示の読み込みというアクションをdispatchで実行に移す
    dispatch(fetchingPosts(true))
    try {
      // apiからgetメソッドで投稿データを取得し代入
      const response = await axios.get(`${apiUrl}/posts`);
      // 読み込みのアクションをオフにする
      dispatch(fetchingPosts(false));
      // 代入した定数responseのdataを表示するアクションをdispatch
      dispatch(fetchPostsSuccess(response.data));
    }
    // エラーが起きた場合
    catch (error) {
      // 読み込みのアクションをオフにする
      dispatch(fetchingPosts(false));
      // エラーが起きた時のアクションをdispatch
      dispatch(fetchPostsFailure(true));
    }
  }
}

// 新規作成するカラムを引数に入れる
export const addPost = ({ title, content }) => {
  return async dispatch => {
    // 読み込みアクション
    dispatch(addingPost(true))
    try {
      // postメソッドでpostIndexのURLにカラムを追加、ここでは変数letを使う
      let response = await axios.post(`${apiUrl}/posts`, { title, content });
      dispatch(addingPost(false));
      // postIndexにカラムを追加したものを代入したresponseを
      // dataオブジェクトに代入
      const { data } = response;
      //　新しく投稿するデータをカラムに追加してnewPostに代入
      const newPost = { id: data.id, title: data.title, content: data.content };
      // 投稿するアクションをdispatch
      dispatch(addPostSuccess(newPost));
      // 投稿をされたオブジェクトが履歴に残るようにpostIndexのUｒｌに追加
      history.push("/");
    }
    catch (error) {
      dispatch(addingPost(false));
      dispatch(addPostFailure(true));
    }
  }
}

// 一つの投稿を取得
export const getPost = id => {
  return async dispatch => {
    dispatch(fetchingPost(true))
    try {
      // getメソッドでidごとの個別のデータを取得
      const response = await axios.get(`${apiUrl}/posts/${id}`);
      dispatch(fetchingPost(false));
      // 個別のデータを取得する以外はpostIndexと処理は変わらない
      dispatch(fetchPostSuccess(response.data));
    }
    catch (error) {
      dispatch(fetchingPost(false));
      dispatch(fetchPostFailure(true));
    }
  }
}

export const deletePost = id => {
  return async dispatch => {
    // getPostで既に個別の投稿を読み込んでるため読み込みのためのアクションは不要
    const response = await axios.delete(`${apiUrl}/posts/${id}`);
    dispatch(deletePostSuccess(id));
    history.push("/");
  }
}

export const updatePost = post => {
  // 編集画面でpostの中身を表示するためにそれぞれ代入
  const { id, title, content } = post
  return async dispatch => {
    // patchメソッドで個別の投稿に第２引数のカラムを更新
    const response = await axios.patch(`${apiUrl}/posts/${id}`, {title, content})
    const data = response.data
    dispatch(updatePostSuccess(data))
    // 投稿詳細ページに追加
    history.push(`/posts/${post.id}`)
  }
}