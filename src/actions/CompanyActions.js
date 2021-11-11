import * as CompanyActionTypes from '../action-types/CompanyActionTypes'

export function setCompanyList(payload) {
    return {
        type: CompanyActionTypes.SET_COMPANY_LIST,
        payload
    }
}

export function getCompanyList() {
    return async function (dispatch) {
        const res = fetch('http://localhost:8088/companies/', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setCompanyList(data)))
            .catch(err => console.log("Error Uwu"))

    }
}

export function saveCompany(payload) {
    return async function (dispatch) {
        const res = fetch('http://localhost:8088/companies/save', {
            method: 'POST',
            Headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => console.log("Saved"))
            .catch(err => console.log("Error Uwu"))

    }
}

