import { configureStore, combineReducers } from '@reduxjs/toolkit';
import coinsReducer from './Coins/coins';
import detailsReducer from './Details/details';

const reducer = combineReducers({
  coins: coinsReducer,
  details: detailsReducer,
});

const store = configureStore({ reducer });

export default store;
