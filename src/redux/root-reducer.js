import { combineReducers } from "redux";
import tableDataReducer from "./table-data/table-data.reducer";

export default combineReducers({
  tableData: tableDataReducer,
});
