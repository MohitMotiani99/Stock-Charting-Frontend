import * as CompanyActionTypes from '../action-types/CompanyActionTypes'

export function setCompanyList(payload) {
    return {
        type: CompanyActionTypes.SET_COMPANY_LIST,
        payload
    }
}