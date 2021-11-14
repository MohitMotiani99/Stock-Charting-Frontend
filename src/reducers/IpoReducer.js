import * as IpoActionsTypes from '../action-types/IpoActionTypes'

const initialState = {
    ipoList: [{
        ipoId: "",
        companyName: "",
        stockExchangeName: "",
        pricePerShare: 0.0,
        totalStocks: 0,
        openDate: "",
        remarks: ""
    }],
    ipoFilterList: []
}

export default function ipoReducer(state = initialState, action) {
    if (action.type == IpoActionsTypes.SET_IPO_LIST) {
        return {
            ...state,
            ipoList: action.payload
        }
    }
    else if (action.type == IpoActionsTypes.SET_IPO_FILTER_LIST) {
        return {
            ...state,
            ipoFilterList: action.payload
        }
    }

    return state
}