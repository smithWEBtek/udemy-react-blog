import React, { Component } from 'react';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.css';

class Posts extends Component {
 
  state = {
    posts: []
  }
  componentDidMount() {

console.log('props in componentDidMount: ', this.props)

    axios.get('/posts')
    .then(response => {
      // const posts = response.data.slice(0, 4)
      const posts = response.data.slice(response.data.length - 4, response.data.length)
      const updatedPosts = posts.map(post => {
         
        return {
          ...post,
          author: 'Brad'
        }
      });
      this.setState({ posts: updatedPosts });
    })
    .catch(error => {
      console.log(error);
      // this.setState({ error: true });
    });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  } 
  

  render() {

    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          // {...this.props}
          // match={this.props.match}
          clicked={() => this.postSelectedHandler(post.id)} />
      });
    }

    return (
      <section className={classes.Posts}>
        {posts}
      </section>
    )
  }
}

export default Posts;