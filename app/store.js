import { createStore, applyMiddleware } from 'redux';
import minimalReducer from './redux/index.js';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  minimalReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
