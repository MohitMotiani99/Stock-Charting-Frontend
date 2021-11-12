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
            .catch(err => console.log(err))
    }
}

export function getCurrComp2FromCurrComp2(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8088/companies/searchByName?companyName=${payload.companyName}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setCurrCompany2(data)))
            .catch(err => console.log(err))
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
            .catch(err => console.log('Error UwU'))
    }
}
export function getCompanyStats2(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8086/prices/company/stock-variations/${payload.stockExchangeName}/${payload.companyCode}?start=${payload.start}&end=${payload.end}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setCompanyStats2(data)))
            .catch(err => console.log('Error UwU'))
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
            .catch(err => console.log('Error UwU'))
    }
}

export function getSEStats2(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8086/prices/stock-exchange/stock-variations/${payload.stockExchangeName}?start=${payload.start}&end=${payload.end}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setSEStats2(data)))
            .catch(err => console.log('Error UwU'))
    }
}
export function setSEStatsComb(payload) {

    console.log(payload)
    return {
        type: StockPriceActionTypes.SET_SE_STATS_COMB,
        payload
    }
}