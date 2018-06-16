
import { takeLatest, put as dispatch } from 'redux-saga/effects';
import { callGetRss, callPostRss, callDeleteRss} from '../requests/rssRequest'; // callPostRss // removed from postRSSForm
import { RSS_ACTIONS } from '../actions/rssActions';
// import { API_ACTIONS } from '../actions/apiActions';


function* postRSSForm(action) {
  try {
    const formPost = yield callPostRss(action.payload);
    // console.log('FormPost.post saga.axios success', formPost);
    yield dispatch({
      type: RSS_ACTIONS.ADD_RSS,
      payload: formPost
    })
    console.log(`FORM POST`,formPost)
  } catch (error) {
  }
}

// get RSS saved data
function* fetchRss() {
  try{
    const RssResponse = yield callGetRss();
    // console.log('RssResponse.get saga.axios success', RssResponse);
    yield dispatch({
      type: RSS_ACTIONS.SAVE_RSS, // To rssReducer 
      payload: RssResponse,
    })

    } catch (error) {
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
  yield takeLatest(RSS_ACTIONS.FETCH_RSS, fetchRss); // get rss
}
export default rootSaga;
