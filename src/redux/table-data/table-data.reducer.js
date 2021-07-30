const INITIAL_STATE = {
  currentTableData: null,
};

const tableDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_TABLE":
      return {
        ...state,
        currentTableData: action.payload,
      };
    default:
      return state;
  }
};

export default tableDataReducer;
