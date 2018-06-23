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

