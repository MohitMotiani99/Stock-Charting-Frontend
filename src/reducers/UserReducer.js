import * as UserActionTypes from '../action-types/UserActionTypes'

const initialState = {
    userList: []
}

export default function userReducer(state = initialState, action) {
    if (action.type === UserActionTypes.SET_USER_LIST) {
        return Object.assign({}, state, {
            userList: action.payload
        })
    }
    return state
}