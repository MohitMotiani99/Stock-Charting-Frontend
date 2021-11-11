import * as StockPriceActionTypes from '../action-types/StockPriceActionTypes'

export function setCompanyStats(payload) {
    return {
        type: StockPriceActionTypes.SET_COMPANY_STATS,
        payload
    }
}

export function setCurrCompany(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_COMPANY,
        payload
    }
}

export function setCurrStock(payload) {
    return {
        type: StockPriceActionTypes.SET_CURR_STOCK,
        payload
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