import React from 'react';
import { connect } from 'react-redux';

import { addPost } from '../../redux/post/post.async.actions';

class PostNew extends React.Component {
  state = {
    title: '',
    content: ''
  }

  // 入力されたらsetStateで状態が更新される
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value })
  }

  // 送信された時の処理
  handleSubmit = event => {
    // 前の時に送信された情報が残らないように空にする
    event.preventDefault()
    // 送信される時のpropsをdispatchオブジェクトに代入
    const { dispatch } = this.props
    // addPostアクションの引数にstateを入れてdispatchする
    dispatch(addPost(this.state))
  }

  render() {
    const { addingPost, addPostFailure } = this.props
    return (
      // 情報を更新している時｜失敗した時の表示
      <div>
        {addingPost &&
          <p>Adding post now...</p>
        }
        {addPostFailure &&
          <p>Failed to add post...</p>
        }
        <h4>Add New Post</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type='text'
              name='title'
              // 空投稿の禁止
              required
              value={this.state.title}
              // 入力されたら状態が更新される
              onChange={this.handleChange}
              placeholder='Title'
            />
          </div>
          <div>
            <textarea
              name='content'
              rows='5'
              required
              value={this.state.content}
              onChange={this.handleChange}
              placeholder='Content'
            />
          </div>
          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }
}

// このComponentのstateにpostsのactionを受け渡す
const mapStateToProps = state => {
  const { addingPost, addPostFailure } = state
  return { addingPost, addPostFailure }
}

export default connect(mapStateToProps)(PostNew)