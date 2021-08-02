import React, { Component } from "react";
import "./data-table.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomOrderList from "../custom-order-list/custom-order-list.component";
import Scroll from "../scroll/scroll.component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentTableData } from "../../redux/table-data/table-data.actions";
import { addItem } from "../../redux/product/product.actions";
import { selectSelectedProductsCount, selectSelectedProducts } from "../../redux/product/product.selectors";
import { createStructuredSelector } from "reselect";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: "",
      percentage: 0,
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

      const { products } = this.state;
      const { addItem} = this.props;
      
        const foundProduct = products.find(
          (product) => product.referencia === isbn
        );
        if (!foundProduct) {
          return alert(
            "No se ha encontrado el libro que hace referencia al ISBN introducido."
          );
        } else {
          addItem(foundProduct);
        }
      
    } catch (error) {
      console.log("ERROR!", error);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDatesChange = (e) => {
    if (this.props.selectedProducts.length) {
      if (e.target.name === "startDate") {
        e.target.value = this.state.startDate;
      } else if (e.target.name === "endDate") {
        e.target.value = this.state.endDate;
      }
      return alert("No puede cambiar las fechas una vez añadido un ISBN");
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    const {
      isbn,
      authorName,
      percentage,
      startDate,
      endDate,
    } = this.state;
    const { history, match, selectedProducts, setCurrentTableData, selectedProductsCount } = this.props;
    return (
      <div className="data-table">
        <table className="table-data">
          <tr className="table-r-data">
            INTRODUCE EL NOMBRE DEL AUTOR:{" "}
            <CustomInput
              inputType={"text"}
              inputPlaceholder={"Nombre de autor..."}
              inputName={"authorName"}
              handleChange={this.handleChange}
            />
          </tr>
          <tr className="table-r-data">
            INTRODUCE EL % DE DERECHOS DE AUTOR PACTADOS:{" "}
            <CustomInput
              inputType={"text"}
              inputPlaceholder={"% pactado..."}
              inputName={"percentage"}
              handleChange={this.handleChange}
            />
            %
          </tr>
          <tr className="table-r-data">
            INTRODUCE LAS FECHAS DE LA LIQUIDACIÓN:
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
          </tr>
          <tr className="table-r-data">
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
            <Scroll>
              <CustomOrderList items={selectedProducts} />
            </Scroll>
          </tr>
          <tr className="table-r-data">
            NÚMERO DE LIBROS AÑADIDOS: {selectedProductsCount}
          </tr>
        </table>
        <div
          className="calculate-button"
          onClick={() => history.push(`${match.url}resultado`)}
        >
          <CustomButton
            buttonName={"CALCULAR"}
            handleClick={setCurrentTableData}
            argument={{
              authorName,
              percentage,
              selectedProducts,
              startDate,
              endDate,
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectedProducts: selectSelectedProducts,
  selectedProductsCount: selectSelectedProductsCount
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentTableData: (tableData) => dispatch(setCurrentTableData(tableData)),
  addItem: (item) => dispatch(addItem(item))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DataTable));
