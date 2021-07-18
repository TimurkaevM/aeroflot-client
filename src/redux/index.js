import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import usersReducer from './ducks/usersReducer';
import imagesReducer from './ducks/imagesReducer';
import ticketsReducer from './ducks/ticketsReducer';
import applicationReducer from './ducks/applicationReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga/index';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  users: usersReducer,
  images: imagesReducer,
  tickets: ticketsReducer,
  application: applicationReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger, sagaMiddleware),
);

sagaMiddleware.run(rootWatcher);

export default store;
