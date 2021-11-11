import * as StockExchangeActionTypes from '../action-types/StockExchangeActionTypes'

export function setSEList(payload) {
    return {
        type: StockExchangeActionTypes.SET_SE_LIST,
        payload
    }
}

export function getSEList() {
    return async function (dispatch) {
        fetch('http://localhost:8087/exchanges/', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setSEList(data))
            .catch(err => console.log('Error UwU'))
    }
}