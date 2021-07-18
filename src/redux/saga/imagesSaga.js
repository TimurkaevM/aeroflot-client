import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/api';
import {
  loadImage,
  loadImageSuccess,
  loadImageFailed,
  FETCHED_IMAGES,
} from '../ducks/imagesReducer';

function* fetchImageAsync() {
  try {
    yield put(loadImage());
    const data = yield call(() => {
      return api.get('/images').then((response) => response.data);
    });
    yield put(loadImageSuccess(data));
  } catch (error) {
    yield put(loadImageFailed());
  }
}

export function* watchFetchImages() {
  yield takeEvery(FETCHED_IMAGES, fetchImageAsync);
}
