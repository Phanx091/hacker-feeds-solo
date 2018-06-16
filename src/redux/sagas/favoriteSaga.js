
import { takeLatest, put as dispatch } from 'redux-saga/effects';
import { callPostFavorite, callGetFavorite, callDeleteFavorite} from '../requests/favoriteRequest'; 
import { FAVORITE_ACTIONS } from '../actions/favoriteActions';


function* postFavoriteForm(action) {
  try {
    console.log('postFavorite');
    const postFavForm = yield callPostFavorite(action.payload);
    // yield dispatch({
    //   type: FAVORITE_ACTIONS.ADD_FAVORITE,
    //   payload: postFavForm
    // })

  } catch (error) {
  }
}


function* fetchFavorite() {
  try{
    const fetchFavResponse = yield callGetFavorite();
    console.log('fetchFavResponse.fetch from saga.axios success', fetchFavResponse);
    yield dispatch({
      type: FAVORITE_ACTIONS.SAVE_FAVORITE, // To rssReducer 
      payload: fetchFavResponse,
    })

    } catch (error) {
  }
}
function* deleteFavoriteItems(payload) {
  const { id } = payload;
  try {
    const deleteFavItems = yield callDeleteFavorite(id);
    console.log('itemDeleted.delete saga.axios success', deleteFavItems);
    yield dispatch({
      type: FAVORITE_ACTIONS.FETCH_FAVORITE,
    })
  } catch (error) {}
}
// const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield takeLatest(FAVORITE_ACTIONS.ADD_FAVORITE, postFavoriteForm); // post favorite rss feed
  yield takeLatest(FAVORITE_ACTIONS.DELETE_FAVORITE, deleteFavoriteItems); // delete favorite feed
  yield takeLatest(FAVORITE_ACTIONS.FETCH_FAVORITE, fetchFavorite); // fetch/get favorite feed
}
export default rootSaga;
