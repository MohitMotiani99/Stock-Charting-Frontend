import * as HomeActionTypes from '../action-types/HomeActionTypes'

export function setAdmin(payload) {
    return {
        type: HomeActionTypes.SET_ADMIN,
        payload
    }
}