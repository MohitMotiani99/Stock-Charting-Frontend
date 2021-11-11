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
            .catch(err => console.log(err))

    }
}


export function saveCompany(payload) {
    return async function (dispatch) {
        const res = fetch('http://localhost:8088/companies/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then((data) => {
                console.log("Saved")
                return data === "" ? {} : dispatch(getCompanyList())
            })
            .catch(err => console.log(err))

    }
}

export function deleteCompany(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8088/companies/delete?companyId=${payload}`, {
            method: 'DELETE',
        })
            .then(() => dispatch(getCompanyList()))
            .catch(err => console.log(err))
    }
}

export function updateCompany(payload) {
    return async function (dispatch) {
        const res = fetch(`http://localhost:8088/companies/update?companyId=${payload.companyId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then((data) => {
                console.log("Saved")
                return data === "" ? {} : dispatch(getCompanyList())
            })
            .catch(err => console.log(err))

    }
}
