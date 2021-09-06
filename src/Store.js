import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './Redux/rootReducer';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage
}

const persistRedu = persistReducer(persistConfig, rootReducer)

const store = createStore(persistRedu, applyMiddleware(thunk));

export const persistor = persistStore(store)


export default store;