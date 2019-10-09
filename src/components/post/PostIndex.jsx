import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../../redux/post/post.async.actions'

class TopPage extends Component {
  componentDidMount () {
    // getPostで定義した処理をdispatchでTopPageクラスに持ってくる
    const { dispatch } = this.props
    dispatch(getPosts())
  }

  render() {
    // propsをpostsのactionに受け渡す
    const { posts, fetchingPosts, fetchPostsFailure } = this.props
    // fetchingしてる時
    if (fetchingPosts) {
      return (
        <p>Fetching posts...</p>
      )
    }
    // fetchに失敗した時
    if (fetchPostsFailure) {
      return (
        <p>Failed to fetch posts...</p>
      )
    }
    // 投稿が存在する時
    if(posts.length) {
      return (
        <div>
          <h4>posts</h4>
          {posts.map(post => {
            return (
              // 投稿ごとに識別するためユニークなidを割り振る
              <div key={ post.id }>       
                <h4>
                  {/* 投稿ごとの詳細ページのリンク先 */}
                  <Link to={`/posts/${post.id}`}>
                    {post.id}: {post.title}
                  </Link>
                </h4>
                <p>{post.content}</p>
              </div>
            )
          })}
        </div>
      )    
    } else {
      return (<div>No posts</div>)
    }
  }
}

// このComponentのstateにpostsのactionを受け渡す
const mapStateToProps = state => {
  const { posts, fetchingPosts, fetchPostsFailure } = state
  return { posts, fetchingPosts, fetchPostsFailure }
}

// 新しい状態のstateとこのComponentのpropsをつなぐ
export default connect(mapStateToProps)(TopPage)