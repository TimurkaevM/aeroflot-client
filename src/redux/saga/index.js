import { all } from 'redux-saga/effects';
import { watchFetchImages } from './imagesSaga';
import { watchFetchTickets } from './ticketsSaga';
import { watchUser } from './userSaga';

export function* rootWatcher() {
  yield all([watchFetchImages(), watchFetchTickets(), watchUser()]);
}
