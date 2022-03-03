import { combineReducers } from 'redux';
import productsReducer from './productsReducers';

export default combineReducers({
  produucts: productsReducer
});