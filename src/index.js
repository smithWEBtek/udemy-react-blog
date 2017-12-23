import React from 'react';
import ReactDOM from 'react-dom';
import classes from './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.request.use(request => {
  // console.log('the request: ', request)
  // edit, addHeaders, do stuff....
  return request
}, error => {
  console.log('bad request error: ', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  // console.log('the response: ', response)
  return response
}, error => {
  console.log('no response error: ', error);
  return Promise.reject(error);
});

ReactDOM.render( <App className={classes.Body}/>, document.getElementById( 'root' ) );
registerServiceWorker();
