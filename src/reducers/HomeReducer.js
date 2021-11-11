import * as HomeActionTypes from '../action-types/HomeActionTypes'

const initialState = {
    admin: true
}

export default function homeReducer(state = initialState, action) {
    if (action.type == HomeActionTypes.SET_ADMIN) {
        return {
            ...state,
            admin: action.payload
        }
    }
    return state
}