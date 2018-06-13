import { takeLatest } from 'redux-saga/effects';
import { callApiItems  } from '../requests/apiRequest';
import { callGetRss } from '../requests/rssRequest';
import { API_ACTIONS } from '../actions/apiActions';
import { FEED_ACTIONS } from '../actions/feedActions';
import { put as dispatch } from 'redux-saga/effects';


// get api call 
function* apiFetchItems(data) {
    try{
      const rssList = yield callGetRss();
      //const apiResponseItem = yield callApiItems(rssList);
       // this is a request located in apiActions

      //console.log('apiResponseItem.get saga.axios success:', apiResponseItem);
     

      // let returnedData = {
      //   feeds: [],
      //   items: [],
      // };
      for(let i = 0; i < rssList.length; i += 1) {
        
        const feed = rssList[i];
        // console.log('GETTING FEED', feed);
        const response = yield callApiItems(feed);
        // console.log('RESPONSE', response);
        // Items
        const action = { type: API_ACTIONS.SAVE_API, payload: response.items}; // dispatch data from local state 
        yield dispatch(action);
        // Feeds
        const actionFeed = { type: FEED_ACTIONS.SAVE_FEED, payload: response}; // dispatch data from local state 
        yield dispatch(actionFeed);
        //const action = { type: API_ACTIONS.SET_API_FEED, payload: response.feeds}; // dispatch data from local state 
        //yield dispatch(action);
      } 
      
            
      // Items
      //action = { type: API_ACTIONS.SET_API, payload: response.data.items}; // dispatch data from local state 
      //yield dispatch(action);
      // rssList.forEach(feed => {
      //   const response = yield callApiItems(feed);
      //   // Items
      //   const action = { type: API_ACTIONS.SET_API, payload: response.data.items}; // dispatch data from local state 
      //   yield dispatch(action);
      //   // Feeds
      //   //const action = { type: API_ACTIONS.SET_API, payload: response.data}; // dispatch data from local state 
      //   //yield dispatch(action);
        
      // });
      
      // yield dispatch({
      //   type: API_ACTIONS.SET_API,
      //   payload: apiResponseItem
      // })
    } catch (error) {}
  }
  

function* rootSaga() {
  yield takeLatest(API_ACTIONS.FETCH_API, apiFetchItems);
  yield takeLatest(FEED_ACTIONS.FETCH_FEED, apiFetchItems);
}
export default rootSaga;


