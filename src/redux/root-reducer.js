import { combineReducers } from "redux";
import tableDataReducer from "./table-data/table-data.reducer";
import productReducer from "./product/product.reducer";

export default combineReducers({
  tableData: tableDataReducer,
  product: productReducer
});
