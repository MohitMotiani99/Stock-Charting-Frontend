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
    companyStats2: {
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
    currCompany2: {
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
    currComp: "Apple",
    currComp2: "Apple",
    currStock: "NASDAQ",
    curreStock2: "NASDAQ",
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
    SEStats: {
        stockSeries1List: [],
        avgPrice: 0.0,
        maxPrice: 0.0,
        minPrice: 0.0,
        growth: 0.0
    },
    SEStats2: {
        stockSeries1List: [],
        avgPrice: 0.0,
        maxPrice: 0.0,
        minPrice: 0.0,
        growth: 0.0
    },
    start: subMonths(new Date(), 6),
    end: new Date(),
    start2: subMonths(new Date(), 6),
    end2: new Date(),
    SEStatsComb: [{
        localDate: "",
        priceA: 0.0,
        priceB: 0.0
    }],


    currSector: {
        sectorId: "",
        sectorName: "",
        brief: ""
    },
    currSector2: {
        sectorId: "",
        sectorName: "",
        brief: ""
    },
    currSect: "Technology",
    currSect2: "Technology",
    sectorStats: {
        stockSeries1List: [],
        avgPrice: 0.0,
        maxPrice: 0.0,
        minPrice: 0.0,
        growth: 0.0
    },
    sectorStats2: {
        stockSeries1List: [],
        avgPrice: 0.0,
        maxPrice: 0.0,
        minPrice: 0.0,
        growth: 0.0
    },

}

export default function stockPriceReducer(state = initialState, action) {
    if (action.type === StockPriceActionTypes.SET_COMPANY_STATS) {
        return {
            ...state,
            companyStats: action.payload
        }
    }
    if (action.type === StockPriceActionTypes.SET_COMPANY_STATS2) {
        return {
            ...state,
            companyStats2: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_CURR_COMPANY) {

        return {
            ...state,
            currCompany: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_CURR_COMPANY2) {

        return {
            ...state,
            currCompany2: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_CURR_STOCK) {
        return {
            ...state,
            currStock: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_CURR_STOCK2) {
        return {
            ...state,
            currStock2: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_CURR_COMP) {
        return {
            ...state,
            currComp: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_CURR_COMP2) {
        return {
            ...state,
            currComp2: action.payload
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
    else if (action.type === StockPriceActionTypes.SET_START2) {
        console.log(action.type)
        console.log(action.payload)
        return {
            ...state,
            start2: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_END2) {
        console.log(action.type)
        console.log(action.payload)
        return {
            ...state,
            end2: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_CURR_EXCHANGE) {
        return {
            ...state,
            currExchange: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_SE_STATS) {
        //let stats = state.SEStats
        // stats.push(action.payload)

        return {
            ...state,
            SEStats: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_SE_STATS2) {
        //let stats = state.SEStats
        // stats.push(action.payload)

        return {
            ...state,
            SEStats2: action.payload
        }
    }
    else if (action.type === StockPriceActionTypes.SET_SE_STATS_COMB) {

        console.log(action.payload)
        return {
            ...state,
            SEStatsComb: action.payload
        }
    }
    else if (action.type == StockPriceActionTypes.SET_CURR_SECTOR) {
        return {
            ...state,
            currSector: action.payload
        }
    }
    else if (action.type == StockPriceActionTypes.SET_SECTOR_STATS) {
        return {
            ...state,
            sectorStats: action.payload
        }
    }
    else if (action.type == StockPriceActionTypes.SET_SECTOR_STATS2) {
        return {
            ...state,
            sectorStats2: action.payload
        }
    }
    else if (action.type == StockPriceActionTypes.SET_CURR_SECT) {
        return {
            ...state,
            currSect: action.payload
        }
    }
    else if (action.type == StockPriceActionTypes.SET_CURR_SECT2) {
        return {
            ...state,
            currSect2: action.payload
        }
    }

    return state
}