import * as CompanyActionTypes from '../action-types/CompanyActionTypes'

const initialState = {
    companyList: []
}

export default function companyReducer(state = initialState, action) {
    if (action.type === CompanyActionTypes.SET_COMPANY_LIST) {
        return Object.assign({}, state, {
            companyList: action.payload
        })
    }
    return state
}