
import { takeLatest, put as dispatch } from 'redux-saga/effects';
import { callGetRss, callPostRss } from '../requests/rssRequest'; // callPostRss // removed from postRSSForm
import { USER_ACTIONS } from '../actions/userActions';
import { callUser } from '../requests/userRequests';
import { RSS_ACTIONS } from '../actions/rssActions';
// import { callApiItems , callApiForm } from '../requests/apiRequest';
// import axios from 'axios';

// function* rootSaga() {
//   yield takeEvery('ADD_RSS', postRSSForm); // post rss
//   yield takeEvery('SET_RSS', rssFeedItems); // get rss
//   // yield takeEvery('DELETE_RSS', itemDeleted); // delete rss
// }

function* postRSSForm(action) {
  try {
    const formPost = yield callPostRss();// (axios.post, '/api/rss', action.payload) callPostRss();
    const user = yield callUser();
    console.log('FormPost.get saga.axios success', formPost);
    yield dispatch({
      type: RSS_ACTIONS.SET_RSS,
      payload: formPost
    })
    yield dispatch({
      type: USER_ACTIONS.SET_USER,
      user,
    });
  } catch (error) {
    yield dispatch({
      type: USER_ACTIONS.USER_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    });
  }
}


// get api call with items 
// function* apiFetchItems() {
//   try{
//     const apiResponseItem = yield callApiItems();
//     console.log('apiResponseItem.get saga.axios success', apiResponseItem);
//     yield dispatch({
//       type: 'FETCH_RSS', // To rssReducer 
//       payload: apiResponseItem.data
//     })
//   } catch (error) {}
// }

// get api call with feed
// function* apiFetchItems() {
//   try{
//     const apiResponseFeed = yield callApiForm();
//     console.log('apiResponseFeed.get saga.axios success', apiResponseFeed);
//     yield dispatch({
//       type: 'FETCH_RSS', // To rssReducer 
//       payload: apiResponseFeed.data
//     })
//   } catch (error) {}
// }

// get RSS saved data
function* rssFeedItems() {
  try{
    // const AddRssResponse = yield callPostRss();
    const RssResponse = yield callGetRss();
    const user = yield callUser();
    console.log('RssResponse.get saga.axios success', RssResponse);
    yield dispatch({
      type: RSS_ACTIONS.SAVE_RSS, // To rssReducer 
      payload: RssResponse,
    })
    // yield dispatch({
    //   type: RSS_ACTIONS.SAVE_RSS, // To rssReducer 
    //   payload: AddRssResponse,
    // })
    yield dispatch({
      type: USER_ACTIONS.SET_USER,
      user,
    });
  } catch (error) {
    yield dispatch({
      type: USER_ACTIONS.USER_FETCH_FAILED,
      message: error.data || "FORBIDDEN",
    });
  }
}




// function* deleteFeedItems() {
//   try {
//     const itemDeleted = yield call (axios.delete, `/api/rss/${id}`, config);
//     console.log('itemDeleted.delete saga.axios success', itemDeleted);
//     yield dispatch({
//       type: 'SET_RSS',
//     })

//   } catch (error) {}
// }

// const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeLatest(RSS_ACTIONS.ADD_RSS, postRSSForm);
  yield takeLatest(RSS_ACTIONS.SET_RSS, rssFeedItems); 
  yield takeLatest(RSS_ACTIONS.FETCH_RSS, rssFeedItems); // get rss

}



export default rootSaga;