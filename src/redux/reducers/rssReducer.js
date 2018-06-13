// import { combineReducers } from "redux";
import { RSS_ACTIONS } from '../actions/rssActions';

  const rss = (state = [], action) => {
    switch (action.type) {
        case RSS_ACTIONS.SAVE_RSS:
            console.log(`RSS Reducer`, action.payload);
            return action.payload
        default:
            return state
    }
}
export default rss;

