import { TableDataActionTypes } from "./table-data.types";

const INITIAL_STATE = {
  currentTableData: null,
  authorName: "",
  percentage: 0,
  startDate: "",
  endDate: "",
};

const tableDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TableDataActionTypes.SET_CURRENT_TABLE:
      return {
        ...state,
        currentTableData: action.payload,
      };
    case TableDataActionTypes.SET_AUTHOR_NAME:
      return {
        ...state,
        authorName: action.payload,
      };
    case TableDataActionTypes.SET_PERCENTAGE:
      return {
        ...state,
        percentage: action.payload,
      };
    case TableDataActionTypes.SET_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case TableDataActionTypes.SET_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    default:
      return state;
  }
};

export default tableDataReducer;
