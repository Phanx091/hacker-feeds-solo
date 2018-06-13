import { API_ACTIONS } from '../actions/apiActions';


const api = (state = [], action) => {
    switch (action.type) {
        case API_ACTIONS.SAVE_API:
            console.log(`API Reducer`, action.payload);
            return [...state, ...action.payload];
        default:
            return state;
    }
}
export default api;