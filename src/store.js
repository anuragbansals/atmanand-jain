import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./redux/reducers/rootReducer";
import rootSaga from "./redux/sagas/rootSaga";


const saga = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(saga))

saga.run(rootSaga)

export default store