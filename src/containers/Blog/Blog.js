import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Posts from './Posts/Posts';
import Post from '../../components/Post/Post';
import NewPost from './NewPost/NewPost';
import './Blog.css'; 

class Blog extends Component {
  render () {
    return (
      <div className="Blog">
        <p style={{textAlign: 'center'}}>{new Date().toUTCString()}</p>
        <hr />
        <header>
          <nav>
            <ul>
              <li><Link to="/" alt="home">Home</Link></li>
              <li><Link to="/posts" alt="posts">Posts</Link></li>
              <li><Link to={{
                pathname: '/new-post',
                search: '?mrgoodbar',
                hash: '#5'
              }} alt="new-post">New Post</Link></li>

              <li><Link to='/posts/5' alt="post">SinglePost</Link></li>
               
            </ul>
          </nav>
        </header>
        <hr />
        <Route path="/" exact />
        <Route path="/posts" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />  
        <p>I want to see post 42 here: </p>
        <Route path='/posts/5' exact render={()=> <Post id='5' />}/>  
      </div>
      );
    }
  }

export default Blog;
