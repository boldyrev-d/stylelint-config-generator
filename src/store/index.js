import { createStore } from 'redux';
import reducer from '../reducer';

const store = createStore(reducer);

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

export default store;
