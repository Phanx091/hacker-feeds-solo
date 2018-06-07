import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import apiSaga from './apiSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    apiSaga(),

    // watchIncrementAsync()
  ]);
}
