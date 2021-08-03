import { combineReducers } from "redux";
import tableDataReducer from "./table-data/table-data.reducer";
import productReducer from "./product/product.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["tableData", "product"],
};

const rootReducer = combineReducers({
  tableData: tableDataReducer,
  product: productReducer,
});

export default persistReducer(persistConfig, rootReducer);
