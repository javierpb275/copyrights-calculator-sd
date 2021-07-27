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
      isbn: "",
    };
  }

  addProductByIsbn = (isbn) => {
    const { products } = this.props;
    const { selectedProducts } = this.state;
    const repeatedProduct = selectedProducts.find(
      (selectedProduct) => selectedProduct.referencia === isbn
    );
    if (repeatedProduct) {
      return console.log("you already added that product");
    } else {
      const foundProduct = products.find(
        (product) => product.referencia === isbn
      );
      if (!foundProduct) {
        return console.log("incorrect isbn");
      } else {
        this.setState({
          selectedProducts: [...selectedProducts, ...[foundProduct]],
        });
      }
    }
  };

  render() {
    const { selectedProducts, isbn } = this.state;
    return (
      <div className="data-table">
        <h2 className="data-table-title">DATA TABLE</h2>
        <div>
          INTRODUCE EL NOMBRE DEL AUTOR:{" "}
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"Nombre de autor..."}
            inputName={"nombre-de-autor"}
            handleChange={(e) => this.setState({ authorName: e.target.value })}
          />
        </div>
        <div>
          INTRODUCE EL % DE DERECHOS DE AUTOR PACTADOS:{" "}
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"% pactado..."}
            inputName={"porcentage-pactado"}
            handleChange={(e) => this.setState({ percentage: e.target.value })}
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
            handleChange={(e) => this.setState({ isbn: e.target.value })}
          />
          <CustomButton
            buttonName={"AÑADIR"}
            handleClick={this.addProductByIsbn}
            argument={isbn}
          />
          <CustomOrderList items={selectedProducts} />
        </div>
        <div>INTRODUCE LAS FECHAS DE LA LIQUIDACIÓN: </div>
        <div>
          <CustomInput
            inputType={"date"}
            inputName={"fecha-origen"}
            handleChange={(e) => this.setState({ startDate: e.target.value })}
          />{" "}
          A{" "}
          <CustomInput
            inputType={"date"}
            inputName={"fecha-fin"}
            handleChange={(e) => this.setState({ endDate: e.target.value })}
          />
        </div>
        <CustomButton buttonName={"CALCULAR"} />
      </div>
    );
  }
}

export default DataTable;
