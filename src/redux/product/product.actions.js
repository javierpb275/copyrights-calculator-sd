import { ProductActionTypes } from "./product.types";

export const setSelectedProducts = (selectedProducts) => ({
  type: ProductActionTypes.SET_SELECTED_PRODUCTS,
  payload: selectedProducts,
});

export const addItem = item => ({
    type: ProductActionTypes.ADD_ITEM,
    payload: item
});
