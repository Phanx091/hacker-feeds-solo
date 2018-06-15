import { takeLatest } from 'redux-saga/effects';
import { callApiToFetchData  } from '../requests/apiRequest';
import { callGetRss } from '../requests/rssRequest';
import { API_ACTIONS } from '../actions/apiActions';
import { put as dispatch } from 'redux-saga/effects';
import { RSS_ACTIONS } from '../actions/rssActions';


// get api call 
function* fetchApiData(data) {
    try{
      const rssList = yield callGetRss();
      for(let i = 0; i < rssList.length; i += 1) {
        const feed = rssList[i];
        const response = yield callApiToFetchData(feed);
        console.log('RESPONSE', response);
        yield dispatch({
          type: API_ACTIONS.SAVE_API, payload: response})
       } 
        // yield dispatch({type: RSS_ACTIONS.FETCH_RSS});
    } catch (error) {}
  }

function* rootSaga() {
  yield takeLatest(API_ACTIONS.FETCH_API, fetchApiData);
}
export default rootSaga;


