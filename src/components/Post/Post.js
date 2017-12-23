import React, { Component } from 'react';
import axios from '../../axios';

import './Post.css';

class Post extends Component {
  state = {
    post: {},
    posts: []
  }

  componentDidMount(){
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 20)
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Brad'
          }
        });
      this.setState({ posts: updatedPosts });
      let post = updatedPosts.find(p => p.id === this.props.id)
      this.setState({ 
        post: post
      });
    })
  }

  render(){
    return (
      <article className="Post" onClick={this.props.clicked}>
    <label>Post</label>
      <h4>ID: {this.props.id} Title: {this.props.title}</h4>
      <div className="Info">
          <div className="Author">Author: {this.props.author}</div>
      </div>
    </article>
    ) 
  }
};

export default Post;
