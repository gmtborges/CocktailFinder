import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import root from './reducers/drinkReducer';

const middlewares = __DEV__ ? [thunk, logger] : [thunk];
const store = createStore(root, applyMiddleware(...middlewares));
export default store;
