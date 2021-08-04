import { ProductActionTypes } from "./product.types";

export const setSelectedProducts = (selectedProducts) => ({
  type: ProductActionTypes.SET_SELECTED_PRODUCTS,
  payload: selectedProducts,
});

export const addItem = (item) => ({
  type: ProductActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: ProductActionTypes.CLEAR_ITEM,
  payload: item,
});

export const addItem = (item) => ({
  type: ProductActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: ProductActionTypes.CLEAR_ITEM,
  payload: item,
});

export const fetchProductsStart = () => ({
  type: ProductActionTypes.FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = (products) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (errorMessage) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage,
});

export const fetchProductsAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsStart());

      const response = await fetch(`./products.json`);
      const products = await response.json();

      dispatch(fetchProductsSuccess(products));
    } catch (e) {
      dispatch(fetchProductsFailure(e.message));
    }
  };
};
