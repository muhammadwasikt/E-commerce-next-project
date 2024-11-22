import { getProductsReducer } from "./reducers/getProductsReducer";



const { createStore } = require("redux");



export const store = createStore(getProductsReducer)