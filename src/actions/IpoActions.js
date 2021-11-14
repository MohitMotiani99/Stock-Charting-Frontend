import axios from 'axios';
import * as IpoActionsTypes from '../action-types/IpoActionTypes'
import { saveStockPrice } from './StockPriceActions';

export function setIpoList(payload) {
    return {
        type: IpoActionsTypes.SET_IPO_LIST,
        payload
    }
}

export function getIpoList() {
    return async function (dispatch) {
        fetch(`http://localhost:8083/ipos/`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setIpoList(data)))
            .catch(err => console.log(err))
    }
}
function getMonth(m) {
    switch (m) {
        case "Jan":
            return "01";
        case "Feb":
            return "02";
        case "Mar":
            return "03";
        case "Apr":
            return "04";
        case "May":
            return "05";
        case "Jun":
            return "06";
        case "Jul":
            return "07";
        case "Aug":
            return "08";
        case "Sep":
            return "09";
        case "Oct":
            return "10";
        case "Nov":
            return "11";
        case "Dec":
            return "12";
    }
    return null;
}

function getDate(start) {
    return start.substring(11, 15) + "-" + getMonth(start.substring(4, 7)) + "-" + start.substring(8, 10);
}
export function saveIpo(payload) {

    payload.openDate = getDate(payload.openDate)

    return async function (dispatch) {
        fetch('http://localhost:8083/ipos/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)

        })
            .then(res => res.json())
            .then(data => {
                dispatch(saveStockPrice(data))
                dispatch(getIpoList())
            })
            .catch(err => console.log(err))
    }
}

export function setIpoFilterList(payload) {
    return {
        type: IpoActionsTypes.SET_IPO_FILTER_LIST,
        payload
    }
}


export function getIpoFilterList(payload) {
    console.log(payload)
    return async function (dispatch) {
        const ans = fetch(`http://localhost:8083/ipos/searchByAttrNames?stockExchangeName=${payload.stockExchangeName}&companyName=${payload.companyName}`, {
            method: 'GET'
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log(data)
                dispatch(setIpoFilterList(data))
            })
            .catch(err => console.log(err))

        console.log(ans)

        // axios.get(`http://localhost:8083/ipos/searchByAttrNames?stockExchangeName=${payload.stockExchangeName}&companyName=${payload.companyName}`)
        //     .then(res => console.log(res))
    }
}
