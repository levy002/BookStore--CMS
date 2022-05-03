import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import statusReducer from './categories/categories';

const reducer = combineReducers({
  books: bookReducer,
  categories: statusReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
