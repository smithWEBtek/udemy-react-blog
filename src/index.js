import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log('the request: ', request)
  // edit, addHeaders, do stuff....
  return request
}, error => {
  console.log('bad request error: ', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log('the response: ', response)
  return response
}, error => {
  console.log('no response error: ', error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
