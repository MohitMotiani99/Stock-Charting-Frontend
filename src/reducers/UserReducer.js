import * as UserActionTypes from '../action-types/UserActionTypes'

const initialState = {
    userList: [],
    currUser: {
        userId: "",
        username: "",
        password: "",
        userType: "",
        email: "",
        mobile: "",
        confirmed: true
    }

}

export default function userReducer(state = initialState, action) {
    if (action.type === UserActionTypes.SET_USER_LIST) {
        return Object.assign({}, state, {
            userList: action.payload
        })
    }
    else if (action.type == UserActionTypes.SET_CURR_USER) {
        return {
            ...state,
            currUser: action.payload
        }
    }

    return state
}