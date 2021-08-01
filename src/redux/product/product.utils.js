export const addItemToSelectedProducts = (selectedProducts, selectedProductToAdd) => {
    const repeatedProduct = selectedProducts.find(
        (selectedProduct) => selectedProduct.referencia === selectedProductToAdd.referencia
      );
      if (repeatedProduct) {
        alert("Ese libro ya fue añadido.");
        return [...selectedProducts]
      } 
        return [...selectedProducts, {...selectedProductToAdd}];
        
}