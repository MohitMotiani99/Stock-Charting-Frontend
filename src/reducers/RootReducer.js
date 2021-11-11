import { combineReducers } from "redux";
import companyReducer from "./CompanyReducer";
import stockPriceReducer from "./StockPriceReducer";
import homeReducer from "./HomeReducer"

export default combineReducers({
    companyReducer,
    stockPriceReducer,
    homeReducer
})