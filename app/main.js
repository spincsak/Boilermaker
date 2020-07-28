import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import '../public/index.css';

ReactDOM.render(
  <Provider store={store}>
    <div>Hello, world!</div>
    {/* rest of app goes here! */}
  </Provider>,
  document.getElementById('app')
);
