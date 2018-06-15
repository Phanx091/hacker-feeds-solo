import { API_ACTIONS } from '../actions/apiActions';

let initialState = {
    feed: [],
    items: []
}

const api = (state = initialState, action) => {

    
    switch (action.type) {
        case API_ACTIONS.SAVE_API:
            return initialState = {
                feed: [...state.feed, action.payload.feed],
                items: [...state.items, ...action.payload.items]
            };
        default:
            return state;
    }
}
export default api;


    // sort function by published date
    // const compare = (a,b) => {
    //     if (a.level < b.level) {
    //         return -1;
    //     }
    //     else if (a.level > b.level) {
    //         return 1;
    //     }
    //         return 0;
    // }
    //   let sortData = initialState
    //   let dates = sortData.sort(compare)

