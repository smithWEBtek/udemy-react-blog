import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const URL = 'http://jsonplaceholder.typicode.com'
 
class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null
  }

  componentDidMount(){
    axios.get(`${URL}/posts`)
      .then(response => {
        const posts = response.data.slice(0, 4)
        const updatedPosts = posts.map(post => {
          return {
            ...post, 
            author: 'Brad'
          }
        }) 
        // this.setState({posts: response.data});
        this.setState({posts: updatedPosts});
    });
  }

  postSelectedHandler = (id) => {
    this.setState({selectedPostId: id});
  } 

  render () {
    const posts = this.state.posts.map(post => {
      return <Post 
        id={post.id}
        key={post.id} 
        title={post.title}
        clicked={() => this.postSelectedHandler(post.id)}
        author={post.author}/>
      }
    );

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost 
            id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;