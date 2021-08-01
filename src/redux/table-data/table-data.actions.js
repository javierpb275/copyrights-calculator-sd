import { TableDataActionTypes } from "./table-data.types";

export const setCurrentTableData = (tableData) => ({
  type: TableDataActionTypes.SET_CURRENT_TABLE,
  payload: tableData,
});
