import React from 'react';
import { connect } from 'react-redux';

import { getPost, updatePost } from '../../redux/post/post.async.actions';

class PostEdit extends React.Component {
  // 情報を更新するのでコンストラクタで定義する
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  componentDidMount() {
    // まずidに一致する投稿を取得する
    this.props.getPost(this.props.match.params.id)
      .then(() => {
        // 受け継いだpropsをpostオブジェクトに代入する
        const { post } = this.props
        // postオブジェクトをそれぞれのカラムに受け渡す
        const { title, content } = post
        // 受け継いだ情報で状態を定義する
        this.setState({
          title,
          content
        })
      })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // 新規作成とは違い現在の状態を元々の状態に代入する
    const id = this.props.post.id;
    const { title, content } = this.state
    const post = { id, title, content }
    // 最終的にupdateアクションで更新する
    this.props.updatePost(post);
  };

  render() {
    const { title, content } = this.state
    return (
      <div>
        <h4>Edit {title}</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text" 
              name="title" 
              value={title} 
              onChange={this.handleChange} 
            />
          </div>
          <div>
            <textarea 
              name="content" 
              rows="5" 
              value={content} 
              onChange={this.handleChange} 
            />
          </div>
          <div>
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

// このComponentのstateにpostのactionを受け渡す
const mapStateToProps = ({ post }) => ({ post })

const mapDispatchToProps = { updatePost, getPost }

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
