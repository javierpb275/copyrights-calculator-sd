import React, { Component } from "react";
import "./result-table.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentTableData } from "../../redux/table-data/table-data.selectors";
import { Link } from "react-router-dom";
import editorialColexLogo from "../../assets/logos/editorial-colex-logo.png";
//redux:
import { connect } from "react-redux";
//for download pdf:
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

class ResultTable extends Component {
  printPdf = (id) => {
    const input = document.getElementById(id);
    html2canvas(input).then((canvas) => {
      var imgWidth = 200;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var position = 0;
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };

  calculateAccruedRights = (bookPrice, salesQuantity, percentage) => {
    const result = bookPrice * salesQuantity * (percentage / 100);
    return result;
  };

  calculateTotal = () => {
    const { currentTableData } = this.props;
    let result = 0;
    let accruedRights = 0;
    for (const selectedProduct of currentTableData.selectedProducts) {
      accruedRights = this.calculateAccruedRights(
        selectedProduct.precio,
        selectedProduct.cantidad,
        currentTableData.percentage
      );
      result += accruedRights;
    }
    return result;
  };

  generateTodaysDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    return today;
  };

  render() {
    const { currentTableData } = this.props;
    return (
      <div>
        <div id="result-table">
          <div className="logo-date">
            <div className="logo">
              <img
                alt="editorial-colex-logo"
                className="editorial-colex-logo"
                src={editorialColexLogo}
                width="300px"
              />
            </div>
            <div className="date">{this.generateTodaysDate()}</div>
          </div>
          <div className="author-dates-table-container">
            <table className="table-results">
              <tr className="table-r-results">
                <th className="table-h-results">AUTOR</th>
                <th className="table-h-results">PERIODO DE LIQUIDACIÓN</th>
              </tr>
              <tr className="table-r-results">
                <td className="table-d-results">
                  {currentTableData.authorName}
                </td>
                <td className="table-d-results">
                  {currentTableData.startDate} - {currentTableData.endDate}
                </td>
              </tr>
            </table>
          </div>
          <table className="table-results">
            <tr className="table-r-results">
              <th className="table-h-results">ISBN</th>
              <th className="table-h-results">TÍTULO</th>
              <th className="table-h-results">PRECIO DEL LIBRO</th>
              <th className="table-h-results">NÚMERO DE VENTAS</th>
              <th className="table-h-results">PORCENTAGE</th>
              <th className="table-h-results">DERECHOS DEVENGADOS</th>
            </tr>
            {currentTableData.selectedProducts.map((selectedProduct) => (
              <tr key={selectedProduct.id} className="table-r-results">
                <td className="table-d-results">
                  {selectedProduct.referencia}
                </td>
                <td className="table-d-results">
                  {selectedProduct.descripcion}
                </td>
                <td className="table-d-results">{selectedProduct.precio}€</td>
                <td className="table-d-results">{selectedProduct.cantidad}</td>
                <td className="table-d-results">
                  {currentTableData.percentage}%
                </td>
                <td className="table-d-results">
                  {this.calculateAccruedRights(
                    selectedProduct.precio,
                    selectedProduct.cantidad,
                    currentTableData.percentage
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
        <div className="buttons">
          <div className="back-button">
            <Link to="/">
              <CustomButton
                buttonName={"ATRÁS"}
                handleClick={(atras) => console.log(atras)}
                argument={"atras"}
              />
            </Link>
          </div>
          <div className="pdf-button">
            <CustomButton
              buttonName={"PDF"}
              handleClick={this.printPdf}
              argument={"result-table"}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentTableData: selectCurrentTableData,
});

export default connect(mapStateToProps)(ResultTable);
