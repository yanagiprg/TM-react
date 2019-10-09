import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPost, deletePost } from '../../redux/post/post.async.actions'

class PostShow extends Component {
  componentDidMount() {
    // idに一致する投稿を取得する
    this.props.getPost(this.props.match.params.id)
  }

  render() {
    const { post, fetchingPost, fetchPostFailure } = this.props

    if (fetchingPost) {
      return (
        <p>Fetching posts...</p>
      )
    }

    if (fetchPostFailure) {
      return (
        <p>Failed to fetch posts...</p>
      )
    }

    return (
      <div>
        <h2>{post.id}: {post.title}</h2>
        <p>{post.content}</p>
        <div>
          <button type='button'>
          <Link to={`/posts/${post.id}/edit`}>
            Edit
          </Link>
          </button>
          <button type="button" onClick={() => this.props.deletePost(post.id)}>
            Delete
          </button>
        </div>
        <hr/>
      </div>
    )
  }
}

// このComponentのstateにpostのactionを受け渡す
// 例えば post => ({title: post.title})
const mapStateToProps = ({ post, fetchingPost, fetchPostFailure }) => ({ post, fetchingPost, fetchPostFailure })

// ここに書いたアクションがreducerでdispatchされるように定義する
const mapDispatchToProps = { getPost, deletePost }

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)