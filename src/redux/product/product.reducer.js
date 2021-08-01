import { ProductActionTypes } from "./product.types";

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
    default:
      return state;
  }
};

export default productReducer;
