import { createSelector } from "reselect";

const selectTableData = (state) => state.tableData;

export const selectCurrentTableData = createSelector(
  [selectTableData],
  (tableData) => tableData.currentTableData
);

export const selectAuthorName = createSelector(
  [selectTableData],
  (tableData) => tableData.authorName
);

export const selectPercentage = createSelector(
  [selectTableData],
  (tableData) => tableData.percentage
);

export const selectStartDate = createSelector(
  [selectTableData],
  (tableData) => tableData.startDate
);

export const selectEndDate = createSelector(
  [selectTableData],
  (tableData) => tableData.endDate
);
