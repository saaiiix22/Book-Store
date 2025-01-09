import { createStore } from 'redux';
import bookReducer from './reducer';

export const store = createStore(bookReducer)
