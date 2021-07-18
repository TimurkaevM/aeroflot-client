import { put, takeEvery, call } from 'redux-saga/effects';
import { api } from '../../api/api';
import {
  loadTicketsStart,
  loadTicketsSuccess,
  loadTicketsFailed,
  FETCHED_TICKETS,
} from '../ducks/ticketsReducer';

function* fetchTicketsAsync() {
  try {
    yield put(loadTicketsStart());
    const data = yield call(() => {
      return api.get('/tickets').then((response) => response.data);
    });
    yield put(loadTicketsSuccess(data));
  } catch (error) {
    yield put(loadTicketsFailed());
  }
}

export function* watchFetchTickets() {
  yield takeEvery(FETCHED_TICKETS, fetchTicketsAsync);
}
