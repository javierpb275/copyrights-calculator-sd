import React, { Component } from "react";
import "./result-table.styles.scss";

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
        <div className="author-dates-table-container">
          <table className="table-results">
            <tr className="table-r-results">
              <th className="table-h-results">AUTOR</th>
              <th className="table-h-results">PERIODO DE LIQUIDACIÓN</th>
            </tr>
            <tr className="table-r-results">
              <td className="table-d-results">{tableData.authorName}</td>
              <td className="table-d-results">
                {tableData.startDate.split("-").reverse().join("/")} A{" "}
                {tableData.endDate.split("-").reverse().join("/")}
              </td>
            </tr>
          </table>
        </div>
        <h2 className="liquidacion-details">DETALLES DE LA LIQUIDACIÓN:</h2>
        <table className="table-results">
          <tr className="table-r-results">
            <th className="table-h-results">ISBN</th>
            <th className="table-h-results">TÍTULO</th>
            <th className="table-h-results">PRECIO DEL LIBRO</th>
            <th className="table-h-results">NÚMERO DE VENTAS</th>
            <th className="table-h-results">PORCENTAGE</th>
            <th className="table-h-results">DERECHOS DEVENGADOS</th>
          </tr>
          {tableData.selectedProducts.map((selectedProduct) => (
            <tr key={selectedProduct.id} className="table-r-results">
              <td className="table-d-results">{selectedProduct.referencia}</td>
              <td className="table-d-results">{selectedProduct.descripcion}</td>
              <td className="table-d-results">
                {selectedProduct.precio}€
              </td>
              <td className="table-d-results">{selectedProduct.cantidad}</td>
              <td className="table-d-results">{tableData.percentage}%</td>
              <td className="table-d-results">
                {selectedProduct.base_imponible *
                  selectedProduct.cantidad *
                  (tableData.percentage / 100)}
                €
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default ResultTable;
