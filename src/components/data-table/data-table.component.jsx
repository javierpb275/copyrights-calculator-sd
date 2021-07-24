import React from "react";
import "./data-table.styles.css";

const DataTable = ({ books }) => {
  return (
    <div className="data-table">
      <h2 className="data-table-title">DATA TABLE</h2>
      {books.map((book, i) => (
        <p>{book.title}</p>
      ))}
    </div>
  );
};

export default DataTable;
