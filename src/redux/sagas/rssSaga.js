
import { takeLatest, put as dispatch } from 'redux-saga/effects';
import { callGetRss, callPostRss, callDeleteRss} from '../requests/rssRequest'; // callPostRss // removed from postRSSForm
import { USER_ACTIONS } from '../actions/userActions';
import { callUser } from '../requests/userRequests';
import { RSS_ACTIONS } from '../actions/rssActions';
// import axios from 'axios';


function* postRSSForm(action) {
  try {
    const formPost = yield callPostRss(action.payload);

    console.log('FormPost.post saga.axios success', formPost);
    yield dispatch({
      type: RSS_ACTIONS.ADD_RSS,
      payload: formPost
    })
  } catch (error) {
  }
}

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
function* deleteRssItems(payload) {
  const { id } = payload;
  try {
    const itemDeleted = yield callDeleteRss(id);
    console.log('itemDeleted.delete saga.axios success', itemDeleted);
    yield dispatch({
      type: RSS_ACTIONS.FETCH_RSS,
    })

  } catch (error) {}
}
// const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeLatest(RSS_ACTIONS.ADD_RSS, postRSSForm); // add rss
  yield takeLatest(RSS_ACTIONS.DELETE_RSS, deleteRssItems); // delete rss
  yield takeLatest(RSS_ACTIONS.FETCH_RSS, rssFeedItems); // get rss
  // yield takeLatest(API_ACTIONS.FETCH_API, apiFetchItems); // get api call
}
export default rootSaga;


