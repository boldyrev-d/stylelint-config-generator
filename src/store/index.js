import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import checkDefaultRule from '../middlewares';

const store = createStore(reducer, applyMiddleware(checkDefaultRule));

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

export default store;
