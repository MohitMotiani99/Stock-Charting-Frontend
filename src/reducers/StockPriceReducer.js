import { subMonths } from 'date-fns'
import * as StockPriceActionTypes from '../action-types/StockPriceActionTypes'

const initialState = {
    companyStats: {
        stockSeries1List: [],
        avgPrice: 0.0,
        maxPrice: 0.0,
        minPrice: 0.0,
        growth: 0.0
    },
    currCompany: {
        companyId: "",
        companyName: "",
        turnover: 0,
        ceo: "",
        boardOfDirectors: [],
        listedInStockExchange: false,
        sector: "",
        brief: "",
        stockExchangeCodes: {}
    },
    currStock: "NASDAQ",
    currExchange: {
        stockExchangeId: "",
        stockExchangeName: "",
        brief: "",
        contactAddress: {
            buildingNumber: "",
            street: "",
            city: "",
            state: "",
            country: "",
            zip: ""
        },
        remarks: ""
    },
    start: subMonths(new Date(), 6),
    end: new Date(),
}

export default function stockPriceReducer(state = initialState, action) {
    if (action.type === StockPriceActionTypes.SET_COMPANY_STATS) {
        return {
            ...state,
            companyStats: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_CURR_COMPANY) {
        console.log(action.type)
        console.log(action.payload)
        console.log({
            ...state,
            currCompany: action.payload
        })

        return {
            ...state,
            currCompany: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_CURR_STOCK) {
        console.log(action.type)
        console.log(action.payload)
        console.log({
            ...state,
            currStock: action.payload
        })
        return {
            ...state,
            currStock: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_START) {
        console.log(action.type)
        console.log(action.payload)
        return {
            ...state,
            start: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_END) {
        console.log(action.type)
        console.log(action.payload)
        return {
            ...state,
            end: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_CURR_EXCHANGE) {
        return {
            ...state,
            currExchange: action.payload
        }
    }
    return state
}