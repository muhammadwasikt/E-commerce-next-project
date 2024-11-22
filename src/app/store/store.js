import { getProductsReducer } from "./reducers/getProductsReducer";



import { createStore } from 'redux';



export const store = createStore(getProductsReducer)