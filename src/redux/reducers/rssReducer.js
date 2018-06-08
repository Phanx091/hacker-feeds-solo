// import {combineReducer} from 'redux';

// const initialState = {
//     rssList: [],

// }

const initialState = {
    items: [],
  };

const rss = (state = initialState, action) => {
    if (action.type === 'SAVE_RSS') {
        console.log(action.payload);
        return  {...state, items: [...action.payload]
      };
    }
    return state;
}
export default rss;

