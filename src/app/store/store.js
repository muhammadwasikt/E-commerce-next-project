import { createStore } from 'redux';
import { getProductsReducer } from "./reducers/getProductsReducer";






export const store = createStore(getProductsReducer)