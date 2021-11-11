import { combineReducers } from "redux";
import companyReducer from "./CompanyReducer";
import stockPriceReducer from "./StockPriceReducer";

export default combineReducers({
    companyReducer,
    stockPriceReducer
})