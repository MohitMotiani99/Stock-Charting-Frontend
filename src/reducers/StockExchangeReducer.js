import * as StockExchangeActionTypes from '../action-types/StockExchangeActionTypes'


const initialState = {
    SEList: [{
        stockExchangeName: "",
        brief: "",
        remarks: "",
        contactAddress: {
            buildingNumber: "",
            street: "",
            city: "",
            state: "",
            country: "",
            zip: ""
        }
    }]
}

export default function stockExchangeReducer(state = initialState, action) {

    if (action.type == StockExchangeActionTypes.SET_SE_LIST) {
        return {
            ...state,
            SEList: action.payload
        }
    }
    return state
}