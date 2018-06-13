import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import rss from './rssReducer';
import api from './apiReducer';
import feed from './feedReducer';

const store = combineReducers({
  user,
  login,
  rss,
  api,
  feed,

});

export default store;
