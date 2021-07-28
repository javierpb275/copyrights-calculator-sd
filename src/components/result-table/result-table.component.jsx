import React, { Component } from "react";
import "./result-table.styles.css";

class ResultTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      total: 0,
    };
  }

  render() {
    const { tableData } = this.props;
    return (
      <div className="result-table">
        <h2 className="result-table-title">RESULT TABLE</h2>
        <p>AUTOR: {tableData.authorName}</p>
        <p>
          PERIODO DE LIQUIDACIÓN:{" "}
          {tableData.startDate.split("-").reverse().join("/")} a{" "}
          {tableData.endDate.split("-").reverse().join("/")}
        </p>
        <h2 className="liquidacion-details">DETALLES DE LA LIQUIDACIÓN:</h2>
        {tableData.selectedProducts.map((selectedProduct) => (
          <div key={selectedProduct.id}>
            <p>ISBN: {selectedProduct.referencia}</p>
            <p>TÍTULO: {selectedProduct.descripcion}</p>
            <p>PRECIO DEL LIBRO: {selectedProduct.base_imponible}€</p>
            <p>NÚMERO DE VENTAS: {selectedProduct.cantidad}</p>
            <p>PORCENTAGE: {tableData.percentage}%</p>
            <p>
              DERECHOS DEVENGADOS:{" "}
              {selectedProduct.base_imponible *
                selectedProduct.cantidad *
                (tableData.percentage / 100)}
              €
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultTable;
