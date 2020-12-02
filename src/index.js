import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import STORE from './store.js';

console.log('index.js ran, at least in part');

ReactDOM.render(
  <App 
    store={STORE}
  />,
  document.getElementById('root')
);