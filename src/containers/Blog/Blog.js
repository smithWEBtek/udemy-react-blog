import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import Post from '../../components/Post/Post';

import './Blog.css'; 

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><a href="/" alt="home">Home</a></li>
              <li><a href="/posts" alt="posts">Posts</a></li>
              <li><a href="/new-post" alt="new-post">New Post</a></li>
               
            </ul>
          </nav>
        </header>
        <p>{new Date().toUTCString()}</p>
        <Route path="/" exact render={()=> <h1>Home</h1> } />
        <Route path="/posts" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
       
      </div>
      );
    }
  }

export default Blog;
