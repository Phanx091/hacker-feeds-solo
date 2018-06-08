// import {combineReducer} from 'redux';



const rss = (state = [], action) => {
    if (action.type === 'SAVE_RSS') {
        console.log(action.payload);
        return action.payload || state;
    }
    return state;
}
export default rss;