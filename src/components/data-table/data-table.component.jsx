import React, { Component } from "react";
import "./data-table.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomOrderList from "../custom-order-list/custom-order-list.component";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: "",
      percentage: 0,
      selectedProducts: [],
      startDate: "",
      endDate: "",
    };
  }

  addProductByIsbn = (e) => {
    const {products} = this.props;
    const {selectedProducts} = this.state;
    const isbn = "111-11-1111-111-1";
    const repeatedProduct = selectedProducts.find(selectedProduct => selectedProduct.referencia === isbn);
    if (repeatedProduct) {
      return console.log('you already added that product')
    } else {
    const foundProduct = products.find(product => product.referencia === isbn);
    if(!foundProduct) {
      return console.log('incorrect isbn');
    } else {
      this.setState({
        selectedProducts: [...selectedProducts, ...[foundProduct]]
      })
    }
  }
  }

  render() {
    const {selectedProducts} = this.state;
    return (
      <div className="data-table">
        <h2 className="data-table-title">DATA TABLE</h2>
        <div>
          INTRODUCE EL NOMBRE DEL AUTOR:{" "}
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"Nombre de autor..."}
            inputName={"nombre-de-autor"}
          />
        </div>
        <div>
          INTRODUCE EL % DE DERECHOS DE AUTOR PACTADOS:{" "}
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"% pactado..."}
            inputName={"porcentage-pactado"}
          />
          %
        </div>
        <div>
          INTRODUCE LOS ISBN DE LOS LIBROS SOBRE LOS QUE VAS A REALIZAR EL
          CÁLCULO: 
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"isbn..."}
            inputName={"isbn"}
          />
          <CustomButton buttonName={"AÑADIR"} handleClick={this.addProductByIsbn}/>
          <CustomOrderList items={selectedProducts}/>
        </div>
        <div>INTRODUCE LAS FECHAS DE LA LIQUIDACIÓN: </div>
        <div>
          <CustomInput inputType={"date"} inputName={"fecha-origen"} /> A{" "}
          <CustomInput inputType={"date"} inputName={"fecha-fin"} />
        </div>
        <CustomButton buttonName={"CALCULAR"} />
      </div>
    );
  }
}

export default DataTable;
