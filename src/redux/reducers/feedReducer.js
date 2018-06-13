import { FEED_ACTIONS } from '../actions/feedActions';






const feed = (state = [], action) => {
    switch (action.type) {
        case FEED_ACTIONS.SAVE_FEED:
            console.log(`FEED Reducer`, action.payload);
            return action.payload
        default:
            return state;
    }
}
export default feed;