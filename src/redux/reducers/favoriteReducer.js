// import { combineReducers } from "redux";
import { FAVORITE_ACTIONS } from '../actions/favoriteActions';

  const favorite = (state = [], action) => {
    switch (action.type) {
        case FAVORITE_ACTIONS.SAVE_RSS:
            console.log(`FAVORITE Reducer`, action.payload);
            return action.payload
        default:
            return state
    }
}
export default favorite;

