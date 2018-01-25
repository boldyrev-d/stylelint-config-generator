import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import checkDefaultRule from '../middlewares/checkDefaultRule';

const middlewares = [checkDefaultRule];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)));

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

export default store;
