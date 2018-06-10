import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import rss from './rssReducer';
// import addRss from './rssReducer';

const store = combineReducers({
  user,
  login,
  rss,
  // addRss,
});

export default store;
