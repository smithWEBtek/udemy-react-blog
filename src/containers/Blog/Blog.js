import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import Posts from './Posts/Posts';
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
                // pathname: '/new-post',
                pathname: this.props.match.url + 'new-post',
                search: '?mrgoodbar',
                hash: '#5'
              }} alt="new-post">New Post</Link></li>
 
            </ul>
          </nav>
        </header>
        <hr />
        <Route path="/" exact />
        <Route path="/posts" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
      );
    }
  }

export default withRouter(Blog);
