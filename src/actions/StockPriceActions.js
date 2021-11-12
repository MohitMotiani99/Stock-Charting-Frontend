import * as StockPriceActionTypes from '../action-types/StockPriceActionTypes'

export function setCompanyStats(payload) {
    return {
        type: StockPriceActionTypes.SET_COMPANY_STATS,
        payload
    }
}
export function setCompanyStats2(payload) {
    return {
        type: StockPriceActionTypes.SET_COMPANY_STATS2,
        payload
    }
}

export function setCurrCompany(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_COMPANY,
        payload
    }
}
export function setCurrCompany2(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_COMPANY2,
        payload
    }
}

export function setCurrStock(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_STOCK,
        payload
    }
}

export function setCurrStock2(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_STOCK2,
        payload
    }
}
export function setCurrComp(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_COMP,
        payload
    }
}

export function setCurrComp2(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_COMP2,
        payload
    }
}

export function getCurrCompFromCurrComp(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8088/companies/searchByName?companyName=${payload.companyName}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setCurrCompany(data)))
            .catch(err => dispatch(setCurrCompany({
                companyId: "",
                companyName: "",
                turnover: 0,
                ceo: "",
                boardOfDirectors: [],
                listedInStockExchange: false,
                sector: "",
                brief: "",
                stockExchangeCodes: {}
            })))
    }
}

export function getCurrComp2FromCurrComp2(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8088/companies/searchByName?companyName=${payload.companyName}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setCurrCompany2(data)))
            .catch(err => dispatch(setCurrCompany2({
                companyId: "",
                companyName: "",
                turnover: 0,
                ceo: "",
                boardOfDirectors: [],
                listedInStockExchange: false,
                sector: "",
                brief: "",
                stockExchangeCodes: {}
            })))
    }
}
export function setStart(payload) {
    return {
        type: StockPriceActionTypes.SET_START,
        payload
    }
}

export function setEnd(payload) {
    return {
        type: StockPriceActionTypes.SET_END,
        payload
    }
}

export function setStart2(payload) {
    return {
        type: StockPriceActionTypes.SET_START2,
        payload
    }
}

export function setEnd2(payload) {
    return {
        type: StockPriceActionTypes.SET_END2,
        payload
    }
}
export function setCurrExchange(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_EXCHANGE,
        payload
    }
}
export function getCompanyStats(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8086/prices/company/stock-variations/${payload.stockExchangeName}/${payload.companyCode}?start=${payload.start}&end=${payload.end}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setCompanyStats(data)))
            .catch(err => dispatch(setCompanyStats({
                stockSeries1List: [],
                avgPrice: 0.0,
                maxPrice: 0.0,
                minPrice: 0.0,
                growth: 0.0
            })))
    }
}
export function getCompanyStats2(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8086/prices/company/stock-variations/${payload.stockExchangeName}/${payload.companyCode}?start=${payload.start}&end=${payload.end}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setCompanyStats2(data)))
            .catch(err => dispatch(setCompanyStats2({
                stockSeries1List: [],
                avgPrice: 0.0,
                maxPrice: 0.0,
                minPrice: 0.0,
                growth: 0.0
            })))
    }
}

export function setSEStats(payload) {
    return {
        type: StockPriceActionTypes.SET_SE_STATS,
        payload
    }
}
export function setSEStats2(payload) {
    return {
        type: StockPriceActionTypes.SET_SE_STATS2,
        payload
    }
}

export function getSEStats(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8086/prices/stock-exchange/stock-variations/${payload.stockExchangeName}?start=${payload.start}&end=${payload.end}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setSEStats(data)))
            .catch(err => dispatch(setSEStats({
                stockSeries1List: [],
                avgPrice: 0.0,
                maxPrice: 0.0,
                minPrice: 0.0,
                growth: 0.0
            })))
    }
}

export function getSEStats2(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8086/prices/stock-exchange/stock-variations/${payload.stockExchangeName}?start=${payload.start}&end=${payload.end}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setSEStats2(data)))
            .catch(err => dispatch(setSEStats2({
                stockSeries1List: [],
                avgPrice: 0.0,
                maxPrice: 0.0,
                minPrice: 0.0,
                growth: 0.0
            })))
    }
}


export function setSEStatsComb(payload) {

    console.log(payload)
    return {
        type: StockPriceActionTypes.SET_SE_STATS_COMB,
        payload
    }
}
export function setCurrSector(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_SECTOR,
        payload
    }
}

export function setSectorStats(payload) {
    return {
        type: StockPriceActionTypes.SET_SECTOR_STATS,
        payload
    }
}
export function setSectorStats2(payload) {
    return {
        type: StockPriceActionTypes.SET_SECTOR_STATS2,
        payload
    }
}

export function setCurrSect(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_SECT,
        payload
    }
}
export function setCurrSect2(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_SECT2,
        payload
    }
}

export function getSectorStats(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8086/prices/sector/stock-variations/${payload.sectorName}/${payload.companyName}?start=${payload.start}&end=${payload.end}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setSectorStats(data)))
            .catch(err => dispatch(setSectorStats({
                stockSeries1List: [],
                avgPrice: 0.0,
                maxPrice: 0.0,
                minPrice: 0.0,
                growth: 0.0
            })))
    }
}

export function getSectorStats2(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8086/prices/sector/stock-variations/${payload.sectorName}/${payload.companyName}?start=${payload.start}&end=${payload.end}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setSectorStats2(data)))
            .catch(err => dispatch(setSectorStats2({
                stockSeries1List: [],
                avgPrice: 0.0,
                maxPrice: 0.0,
                minPrice: 0.0,
                growth: 0.0
            })))
    }
}
