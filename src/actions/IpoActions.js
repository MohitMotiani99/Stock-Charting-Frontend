import * as IpoActionsTypes from '../action-types/IpoActionTypes'

export function setIpoList(payload) {
    return {
        type: IpoActionsTypes.SET_IPO_LIST,
        payload
    }
}

export function getIpoList() {
    return async function (dispatch) {
        fetch('http://localhost:8083/', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setIpoList(data)))
            .catch(err => console.log(err))
    }
}

export function saveIpo(payload) {
    return async function (dispatch) {
        fetch('http://localhost:8083/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)

        })
            .then(res => res.json())
            .then(data => dispatch(getIpoList()))
            .catch(err => console.log(err))
    }
}

export function setIpoFilterList(payload) {
    return {
        type: IpoActionsTypes.SET_IPO_FILTER_LIST,
        payload
    }
}


export function getIpoFilterList() {
    return async function (dispatch) {
        fetch('http://localhost:8083/searchByAttrNames?stockExchangeName=${payload.stockExchangeName}&companyName=${payload.companyName}', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setIpoFilterList(data)))
            .catch(err => console.log(err))
    }
}
