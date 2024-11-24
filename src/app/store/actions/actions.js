import { productTypes } from "./types"

export const dispatchActions = (item) => {
        return {
            type: productTypes.GET_PRODUCTS,
            payload: item
        }
}