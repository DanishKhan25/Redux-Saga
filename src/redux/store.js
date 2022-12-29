import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);
export default store;
