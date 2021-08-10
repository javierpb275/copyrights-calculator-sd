import React, { useState } from "react";
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

const DataTable = (props) => {
  const [isbn, setIsbn] = useState("");

  const addProductByIsbn = async (isbn) => {
    const { addItem, fetchProductsAsync } = props;

    const products = await fetchProductsAsync();

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
  };

  const handleChange = (e) => {
    const { setAuthorName, setPercentage } = props;
    if (e.target.name === "authorName") {
      setAuthorName(e.target.value);
    } else if (e.target.name === "percentage") {
      setPercentage(e.target.value);
    } else {
      setIsbn(e.target.value);
    }
  };

  const onDatesChange = (e) => {
    const { setStartDate, setEndDate } = props;
    if (props.selectedProducts.length) {
      if (e.target.name === "startDate") {
        e.target.value = props.startDate;
      } else if (e.target.name === "endDate") {
        e.target.value = props.endDate;
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

  const {
    history,
    match,
    selectedProducts,
    setCurrentTableData,
    selectedProductsCount,
    isProductsFetching,
    authorName,
    percentage,
    startDate,
    endDate,
  } = props;
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
            handleChange={handleChange}
          />
        </tr>
        <tr className="table-r-data">
          INTRODUCE EL % DE DERECHOS DE AUTOR PACTADOS:{" "}
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"% pactado..."}
            inputName={"percentage"}
            inputValue={percentage}
            handleChange={handleChange}
          />
          %
        </tr>
        <tr className="table-r-data">
          INTRODUCE LAS FECHAS DE LA LIQUIDACIÓN:
          <CustomInput
            inputType={"date"}
            inputName={"startDate"}
            inputValue={startDate}
            handleChange={onDatesChange}
          />{" "}
          A{" "}
          <CustomInput
            inputType={"date"}
            inputName={"endDate"}
            inputValue={endDate}
            handleChange={onDatesChange}
          />
        </tr>
        <tr className="table-r-data">
          INTRODUCE LOS ISBN DE LOS LIBROS SOBRE LOS QUE VAS A REALIZAR EL
          CÁLCULO:
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"isbn..."}
            inputName={"isbn"}
            handleChange={handleChange}
          />
          <CustomButton
            buttonName={"AÑADIR"}
            handleClick={addProductByIsbn}
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
};

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
