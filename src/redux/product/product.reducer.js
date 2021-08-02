import { ProductActionTypes } from "./product.types";
import { addItemToSelectedProducts } from "./product.utils";

const INITIAL_STATE = {
  selectedProducts: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.SET_SELECTED_PRODUCTS:
      return {
        ...state,
        selectedProducts: action.payload,
      };
    case ProductActionTypes.ADD_ITEM:
      return {
        ...state,
        selectedProducts: addItemToSelectedProducts(
          state.selectedProducts,
          action.payload
        ),
      };
    case ProductActionTypes.CLEAR_ITEM:
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(
          (selectedProduct) =>
            selectedProduct.referencia !== action.payload.referencia
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
