import React, { Component } from 'react';
// import { Route, Link, withRouter } from 'react-router-dom';
import { Route, NavLink, withRouter, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

  render () {
    return (
      <div className="Blog">
        <p style={{textAlign: 'center'}}>{new Date().toUTCString()}</p>
        <hr />
        <header>
          <nav>
            <ul>
              
              <li><NavLink 
                to="/" 
                exact alt="home"
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}>Home</NavLink></li>

              <li><NavLink to="/posts" exact alt="posts">Posts</NavLink></li>
              
              <li><NavLink to={{
                pathname: '/new-post',
                // pathname: this.props.match.url + 'new-post',
                search: '?mrgoodbar',
                hash: '#5'}}
                exact alt="new-post"
                >New Post</NavLink></li>
 
            </ul>
          </nav>
        </header>
        <hr />
        <Switch>
          <Route path="/" exact />
          <Route path="/posts" component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
      );
    }
  }

export default withRouter(Blog);
