// import { combineReducers } from "redux";
import { RSS_ACTIONS } from '../actions/rssActions';

// import {combineReducer} from 'redux';

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
export default rss;




// const addRss = (state = [], action) => {
//     console.log('add rss working');
//     if (action.type === RSS_ACTIONS.SET_RSS) {
//         console.log('addRSS', action.payload);
//         return action.payload
//     }
//     return state;
// }





// const initialState = {
//     items: [],
//   };
//   
// const addRss = (state = [], action) => {
//       console.log('rssReducer save success', action);
//     switch (action.type) {
//         case RSS_ACTIONS.SET_RSS:
//             return action.payload
//         default:
//             return state;
//     }
// }


// const addRss = (state = [], action) => {
//     switch (action.type) {
//         case RSS_ACTIONS.ADD_RSS:
//             return action.payload
//         default:
//             return state; 
//     }
//     // console.log('rssReducer post success', action.payload);
// }


// export default combineReducers({
//     rss,
//     addRss,
// })

