import React, { Component } from "react";
import "./result-table.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

class ResultTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  printPdf = (id) => {
    let prtContent = document.getElementById(id);
    let WinPrint = window.open(
      "",
      "",
      "left=0,top=0,width=1000,height=1200,toolbar=0,scrollbars=0,status=0"
    );
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };

  calculateAccruedRights = (bookPrice, salesQuantity, percentage) => {
    const result = bookPrice * salesQuantity * (percentage / 100);
    return result;
  };

  calculateTotal = () => {
    const { tableData } = this.props;
    let result = 0;
    let accruedRights = 0;
    for (const selectedProduct of tableData.selectedProducts) {
      accruedRights = this.calculateAccruedRights(
        selectedProduct.precio,
        selectedProduct.cantidad,
        tableData.percentage
      );
      result += accruedRights;
    }
    return result;
  };

  render() {
    const { tableData } = this.props;
    return (
      <div>
        <div id="result-table">
          <div className="author-dates-table-container">
            <table className="table-results">
              <tr className="table-r-results">
                <th className="table-h-results">AUTOR</th>
                <th className="table-h-results">PERIODO DE LIQUIDACIÓN</th>
              </tr>
              <tr className="table-r-results">
                <td className="table-d-results">{tableData.authorName}</td>
                <td className="table-d-results">
                  {tableData.startDate.split("-").reverse().join("/")} -{" "}
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
                <td className="table-d-results">
                  {selectedProduct.referencia}
                </td>
                <td className="table-d-results">
                  {selectedProduct.descripcion}
                </td>
                <td className="table-d-results">{selectedProduct.precio}€</td>
                <td className="table-d-results">{selectedProduct.cantidad}</td>
                <td className="table-d-results">{tableData.percentage}%</td>
                <td className="table-d-results">
                  {this.calculateAccruedRights(
                    selectedProduct.precio,
                    selectedProduct.cantidad,
                    tableData.percentage
                  ).toFixed(2)}
                  €
                </td>
              </tr>
            ))}
            <tr className="table-r-results">
              <td className="table-d-results"></td>
              <td className="table-d-results"></td>
              <td className="table-d-results"></td>
              <td className="table-d-results"></td>
              <td className="table-d-results">TOTAL:</td>
              <td className="table-d-results">
                {this.calculateTotal().toFixed(2)}€
              </td>
            </tr>
          </table>
        </div>
        <div className="pdf-button">
          <CustomButton
            buttonName={"PDF"}
            handleClick={this.printPdf}
            argument={"result-table"}
          />
        </div>
      </div>
    );
  }
}

export default ResultTable;
