import { combineReducers } from "redux";
import { RSS_ACTIONS } from '../actions/rssActions';
import { API_ACTIONS } from '../actions/apiActions';



const initialState = {
    items: [],
  };

  const rss = (state = initialState, action) => {
    switch (action.type) {
        case RSS_ACTIONS.SAVE_RSS:
            console.log(action.payload);
            return  {...state, items: [...action.payload]};
        default:
            return state
    }
}
// export default rss;

const nextState = {
    data: [],
}
const api = (state = nextState, action) => {
    switch (action.type) {
        case API_ACTIONS.SAVE_API:
            console.log(action.payload);
            return {...state, data: [...action.payload]}
        default:
            return state
    }
}


export default combineReducers({
    rss,
    api,
})









// const addRss = (state = [], action) => {
//     console.log('add rss working');
//     if (action.type === RSS_ACTIONS.SET_RSS) {
//         console.log('addRSS', action.payload);
//         return action.payload
//     }
//     return state;
// }







// export default combineReducers({
//     rss,
//     api,
// })

