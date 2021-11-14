import * as UploadActionTypes from '../action-types/UploadActionTypes'

const initialState = {
    histPriceList: []
}

export default function uploadReducer(state = initialState, action) {
    if (action.type == UploadActionTypes.SET_HIST_PRICE_LIST) {
        return {
            ...state,
            histPriceList: action.payload
        }
    }
    return state
}