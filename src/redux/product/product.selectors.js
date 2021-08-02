import { createSelector } from "reselect";

const selectProduct = (state) => state.product;

export const selectSelectedProducts = createSelector(
  [selectProduct],
  (product) => product.selectedProducts
);

export const selectSelectedProductsCount = createSelector(
  [selectSelectedProducts],
  (selectedProducts) =>
    selectedProducts.reduce(
      (counter, selectedProduct) => (selectedProduct ? counter+=1 : counter),
      0
    )
);
