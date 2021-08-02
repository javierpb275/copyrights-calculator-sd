import { createSelector } from "reselect";

const selectTableData = (state) => state.tableData;

export const selectCurrentTableData = createSelector(
  [selectTableData],
  (tableData) => tableData.currentTableData
); 
