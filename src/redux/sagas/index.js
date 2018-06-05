import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import addForm from './addForm';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    addForm(),

    // watchIncrementAsync()
  ]);
}
