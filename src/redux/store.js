import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers.js/rootReducer";
import mySagas from "./sagas.js";

const SagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(SagaMiddleware));

SagaMiddleware.run(mySagas);

export default store;
