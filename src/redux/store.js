import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middleWare = [ sagaMiddleware ];

//const middleWare = [ thunk ];


if(process.env.NODE_ENV === 'development'){
    middleWare.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;