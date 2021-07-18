import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/api';
import {
  loginUserStart,
  loginUserSuccess,
  loginUserFailed,
  POST_LOGIN,
} from '../ducks/usersReducer';

function* postLoginAsync(action) {
  try {
    yield put(loginUserStart());
    const data = yield call(() => {
      return api
        .post('/login', {
          username: action.email,
          password: action.password,
        })
        .then((response) => response.data);
    });
    yield put(loginUserSuccess(data));
    yield put(localStorage.setItem('token', data.token));
  } catch (error) {
    yield put(loginUserFailed(error.response.data.message));
  }
}

export function* watchUser() {
  yield takeEvery(POST_LOGIN, postLoginAsync);
}
