import { API_ACTIONS } from '../actions/apiActions';

const api = (state = [], action) => {
    // let sortData = [...state, ...action.payload];
    switch (action.type) {
        case API_ACTIONS.SAVE_API:
            // sort function by published date
            const compare = (a,b) => {
                if (a.level < b.level) {
                    return -1;
                }
                else if (a.level > b.level) {
                    return 1;
                }
                    return 0;
            }
              let sortData = [...state, ...action.payload];
              let dates = sortData.sort(compare)
            return dates;
        default:
            return state;
    }
}
export default api;