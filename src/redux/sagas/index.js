import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import apiSaga from './apiSaga';
import rssSaga from './rssSaga';
import favoriteSaga from './favoriteSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    apiSaga(),
    rssSaga(),
    favoriteSaga(),

    // watchIncrementAsync()
  ]);
}
