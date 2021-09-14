import {createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import rootReducer from './rootReducer';
import mySagas from './sagas.js';

const Saga = createSaga();

const store = createStore(rootReducer, applyMiddleware(Saga))

Saga.run(mySagas);

export default store;