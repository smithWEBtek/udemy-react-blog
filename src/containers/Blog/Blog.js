import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const URL = 'http://jsonplaceholder.typicode.com'

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    axios.get(`${URL}/posts`)
      .then(response => {
        this.setState({posts: response.data});
    });
  }
  
  render () {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} post={post} />
      }
    );

    return (
        <div>
            <section className="Posts">
              {posts}
            </section>
            <section>
                <FullPost />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
  }
}

export default Blog;