import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import statusReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  statusReducer,
});

const store = configureStore({ reducer });

export default store;
