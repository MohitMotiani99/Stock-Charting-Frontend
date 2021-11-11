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
            .then(data => {
                dispatch(setSEList(data))
            })
            .catch(err => console.log(err))
    }
}

// export function deleteExchange(payload){
//     return async function(dispatch){
//         fetch(`http://localhost:8087/delete?stockExchangeId=${payload}`,{
//             method:'DELETE'
//         })
//         .then()
//     }
// }

export function saveExchange(payload) {
    return async function (dispatch) {
        const res = fetch('http://localhost:8087/exchanges/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then((data) => {
                console.log("Saved")
                return data === "" ? {} : dispatch(getSEList())
            })
            .catch(err => console.log(err))

    }
}

export function updateExchange(payload) {
    return async function (dispatch) {
        const res = fetch(`http://localhost:8087/exchanges/update?stockExchangeId=${payload.stockExchangeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then((data) => {
                console.log("Saved")
                return data === "" ? {} : dispatch(getSEList())
            })
            .catch(err => console.log(err))

    }
}

