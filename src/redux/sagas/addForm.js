
import { takeEvery, call, put as dispatch } from 'redux-saga/effects';

import axios from 'axios';



function* rootSaga() {
  yield takeEvery('ADD_FORM', postRSSForm);
  yield takeEvery('SET_RSS', rssFeedItems)

}

function* postRSSForm(action) {
  try {
    const formPost = yield call(axios.post, '/api/rss', action.payload);
    console.log("formPost:", formPost);
  } catch (error) {}
}

function* rssFeedItems() {
  try{
    const RssResponse = yield call(axios.get, 'api/rss');
    console.log(RssResponse);
    yield dispatch({
      type: 'RSS',
      payload: RssResponse.data,
    })
  } catch (error) {}
}

// const sagaMiddleware = createSagaMiddleware();

export default rootSaga;
