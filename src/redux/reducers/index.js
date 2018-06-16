import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import rss from './rssReducer';
import api from './apiReducer';
import favorite from './favoriteReducer';
// import feed from './feedReducer';

const store = combineReducers({
  user,
  login,
  rss,
  api,
  favorite,
  // feed,

});

export default store;
