import React, { Component } from "react";
import "./data-table.styles.scss";
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
      products: [],
    };
  }

  addProductByIsbn = async (isbn) => {
    try {
      const response = await fetch(`./products.json`);
      const data = await response.json();
      this.setState({ products: data });

      const { selectedProducts, products } = this.state;
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
          return console.log("book not found!");
        } else {
          this.setState({
            selectedProducts: [...selectedProducts, ...[foundProduct]],
          });
        }
      }
    } catch (error) {
      console.log("ERROR!", error);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDatesChange = (e) => {
    if (this.state.selectedProducts.length) {
      if (e.target.name === "startDate") {
        e.target.value = this.state.startDate;
      } else if (e.target.name === "endDate") {
        e.target.value = this.state.endDate;
      }
      return console.log('you cannot change a date once a book has been added!')
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  render() {
    const {
      isbn,
      authorName,
      percentage,
      selectedProducts,
      startDate,
      endDate,
    } = this.state;
    const { loadTableData } = this.props;
    return (
      <div className="data-table">
        <h2 className="data-table-title">DATA TABLE</h2>
        <div>
          INTRODUCE EL NOMBRE DEL AUTOR:{" "}
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"Nombre de autor..."}
            inputName={"authorName"}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          INTRODUCE EL % DE DERECHOS DE AUTOR PACTADOS:{" "}
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"% pactado..."}
            inputName={"percentage"}
            handleChange={this.handleChange}
          />
          %
        </div>
        <div>INTRODUCE LAS FECHAS DE LA LIQUIDACIÓN: </div>
        <div>
          <CustomInput
            inputType={"date"}
            inputName={"startDate"}
            handleChange={this.onDatesChange}
          />{" "}
          A{" "}
          <CustomInput
            inputType={"date"}
            inputName={"endDate"}
            handleChange={this.onDatesChange}
          />
        </div>
        <div>
          INTRODUCE LOS ISBN DE LOS LIBROS SOBRE LOS QUE VAS A REALIZAR EL
          CÁLCULO:
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"isbn..."}
            inputName={"isbn"}
            handleChange={this.handleChange}
          />
          <CustomButton
            buttonName={"AÑADIR"}
            handleClick={this.addProductByIsbn}
            argument={isbn}
          />
          <CustomOrderList items={selectedProducts} />
        </div>
        <CustomButton
          buttonName={"CALCULAR"}
          handleClick={loadTableData}
          argument={{
            authorName,
            percentage,
            selectedProducts,
            startDate,
            endDate,
          }}
        />
      </div>
    );
  }
}

export default DataTable;
