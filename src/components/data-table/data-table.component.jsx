import React, { Component } from "react";
import "./data-table.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomOrderList from "../custom-order-list/custom-order-list.component";
import Scroll from "../scroll/scroll.component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  setCurrentTableData,
  setAuthorName,
  setPercentage,
  setStartDate,
  setEndDate,
} from "../../redux/table-data/table-data.actions";
import {
  addItem,
  fetchProductsAsync,
} from "../../redux/product/product.actions";
import {
  selectSelectedProductsCount,
  selectSelectedProducts,
  selectProducts,
  selectIsProductsFetching,
} from "../../redux/product/product.selectors";
import { createStructuredSelector } from "reselect";
import WithLoading from "../with-loading/with-loading.component";
import {
  selectAuthorName,
  selectEndDate,
  selectPercentage,
  selectStartDate,
} from "../../redux/table-data/table-data.selectors";

const CustomOrderListWithLoading = WithLoading(CustomOrderList);

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: "",
    };
  }

  addProductByIsbn = async (isbn) => {
    const { addItem, fetchProductsAsync } = this.props;

    const products = await fetchProductsAsync();

    const foundProduct = products.find(
      (product) => product.referencia === isbn
    );

    if (!foundProduct) {
      return alert(
        "No se ha encontrado el libro que hace referencia al ISBN introducido."
      );
    } else {
      //foundProduct.cantidad = 100;
      addItem(foundProduct);
    }
  };

  handleChange = (e) => {
    const { setAuthorName, setPercentage } = this.props;
    if (e.target.name === "authorName") {
      setAuthorName(e.target.value);
    } else if (e.target.name === "percentage") {
      setPercentage(e.target.value);
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  onDatesChange = (e) => {
    const { setStartDate, setEndDate } = this.props;
    if (this.props.selectedProducts.length) {
      if (e.target.name === "startDate") {
        e.target.value = this.props.startDate;
      } else if (e.target.name === "endDate") {
        e.target.value = this.props.endDate;
      }
      return alert("No puede cambiar las fechas una vez añadido un ISBN");
    } else {
      if (e.target.name === "startDate") {
        setStartDate(e.target.value);
      } else if (e.target.name === "endDate") {
        setEndDate(e.target.value);
      }
    }
  };

  render() {
    const { isbn } = this.state;
    const {
      history,
      match,
      selectedProducts,
      setCurrentTableData,
      selectedProductsCount /* dispatch */,
      isProductsFetching,
      authorName,
      percentage,
      startDate,
      endDate,
    } = this.props; //dispatch automatically passed if we do not provide mapDispatchToProps in connect()
    return (
      <div className="data-table">
        <table className="table-data">
          <tr className="table-r-data">
            INTRODUCE EL NOMBRE DEL AUTOR:{" "}
            <CustomInput
              inputType={"text"}
              inputPlaceholder={"Nombre de autor..."}
              inputName={"authorName"}
              inputValue={authorName}
              handleChange={this.handleChange}
            />
          </tr>
          <tr className="table-r-data">
            INTRODUCE EL % DE DERECHOS DE AUTOR PACTADOS:{" "}
            <CustomInput
              inputType={"text"}
              inputPlaceholder={"% pactado..."}
              inputName={"percentage"}
              inputValue={percentage}
              handleChange={this.handleChange}
            />
            %
          </tr>
          <tr className="table-r-data">
            INTRODUCE LAS FECHAS DE LA LIQUIDACIÓN:
            <CustomInput
              inputType={"date"}
              inputName={"startDate"}
              inputValue={startDate}
              handleChange={this.onDatesChange}
            />{" "}
            A{" "}
            <CustomInput
              inputType={"date"}
              inputName={"endDate"}
              inputValue={endDate}
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
              <CustomOrderListWithLoading
                isLoading={isProductsFetching}
                items={selectedProducts}
              />
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
            /* onClick={() => {
              history.push(`${match.url}resultado`);
              dispatch(setCurrentTableData({authorName, percentage, selectedProducts, startDate, endDate}))
            }} */
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
  selectedProductsCount: selectSelectedProductsCount,
  products: selectProducts,
  isProductsFetching: selectIsProductsFetching,
  authorName: selectAuthorName,
  percentage: selectPercentage,
  startDate: selectStartDate,
  endDate: selectEndDate,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentTableData: (tableData) => dispatch(setCurrentTableData(tableData)),
  setAuthorName: (authorName) => dispatch(setAuthorName(authorName)),
  setPercentage: (percentage) => dispatch(setPercentage(percentage)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  addItem: (item) => dispatch(addItem(item)),
  fetchProductsAsync: (book) => dispatch(fetchProductsAsync(book)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DataTable)
);
