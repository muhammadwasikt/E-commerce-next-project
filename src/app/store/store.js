import { createStore } from 'redux';
import { getProductsReducer } from "./reducers/getProductsReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, getProductsReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)



