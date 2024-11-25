import { productTypes } from "../actions/types";

const initialState = {
    allProducts: [],
    cart: [],
    removeCartProducts: [],
    cartTotal: 0,
}
export const getProductsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case productTypes.GET_PRODUCTS:
            return {...state, allProducts:[...state.allProducts,...payload]};
        default:
            return state;
    }
} 