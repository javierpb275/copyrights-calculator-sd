import { ProductActionTypes } from "./product.types";

export const setSelectedProducts = (selectedProducts) => ({
  type: ProductActionTypes.SET_SELECTED_PRODUCTS,
  payload: selectedProducts,
});
