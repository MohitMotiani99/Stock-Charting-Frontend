import { combineReducers } from "redux";
import companyReducer from "./CompanyReducer";
import stockPriceReducer from "./StockPriceReducer";
import homeReducer from "./HomeReducer"
import sectorReducer from "./SectorReducer";
import stockExchangeReducer from "./StockExchangeReducer"
import userReducer from "./UserReducer";

export default combineReducers({
    companyReducer,
    stockPriceReducer,
    homeReducer,
    sectorReducer,
    stockExchangeReducer,
    userReducer
})