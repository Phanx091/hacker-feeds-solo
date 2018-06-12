import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import rss from './rssReducer';
import api from './rssReducer';


const store = combineReducers({
  user,
  login,
  rss,
  api,
});

export default store;
