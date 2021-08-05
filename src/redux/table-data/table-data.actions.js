import { TableDataActionTypes } from "./table-data.types";

export const setCurrentTableData = (tableData) => ({
  type: TableDataActionTypes.SET_CURRENT_TABLE,
  payload: tableData,
});

export const setAuthorName = (authorName) => ({
  type: TableDataActionTypes.SET_AUTHOR_NAME,
  payload: authorName,
});

export const setPercentage = (percentage) => ({
  type: TableDataActionTypes.SET_PERCENTAGE,
  payload: percentage,
});

export const setStartDate = (startDate) => ({
  type: TableDataActionTypes.SET_START_DATE,
  payload: startDate,
});

export const setEndDate = (endDate) => ({
  type: TableDataActionTypes.SET_END_DATE,
  payload: endDate,
});
