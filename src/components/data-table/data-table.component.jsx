import React, { Component } from "react";
import "./data-table.styles.css";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";

class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      authorName: "",
      percentage: 0,
      authorBooks: [],
      selectedBooks: [],
      startDate: "",
      endDate: "",
    };
  }

  render() {
    const { books } = this.props;
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
          CÁLCULO:{" "}
          <CustomInput
            inputType={"text"}
            inputPlaceholder={"isbn..."}
            inputName={"isbn"}
          />
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
