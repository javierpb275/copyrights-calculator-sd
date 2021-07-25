import React, { Component } from "react";
import "./data-table.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomSelectOption from "../custom-select-option/custom-select-option.component";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: "",
      percentage: 0,
      selectedBooks: [],
      startDate: "",
      endDate: "",
    };
  }

  render() {
    const {authorName} = this.state;
    const {books} = this.props;
    const authorBooks = books.filter(book =>
      book.author.toLowerCase().includes(authorName.toLowerCase()));
      console.log(authorBooks);
    return (
      <div className="data-table">
        <h2 className="data-table-title">DATA TABLE</h2>
        <div>
          INTRODUCE EL NOMBRE DEL AUTOR:{" "}
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"Nombre de autor..."}
            inputName={"nombre-de-autor"}
            handleChange={e => this.setState({authorName: e.target.value })}
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
          CÁLCULO:{" "}
          <CustomSelectOption selectName={'book-selected'} options={authorBooks}/>
          <CustomButton buttonName={"AÑADIR"} />
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
