import * as HomeActionTypes from '../action-types/HomeActionTypes'

const initialState = {
    admin: false,
    loggedIn: false,
    loggedUser: {
        userId: "",
        username: "",
        password: "",
        userType: "",
        email: "",
        mobile: "",
        confirmed: true
    }
}

export default function homeReducer(state = initialState, action) {
    if (action.type == HomeActionTypes.SET_ADMIN) {
        return {
            ...state,
            admin: action.payload
        }
    }
    if (action.type == HomeActionTypes.SET_LOGGED_IN) {
        return {
            ...state,
            loggedIn: action.payload
        }
    }
    if (action.type == HomeActionTypes.SET_LOGGED_USER) {
        return {
            ...state,
            loggedUser: action.payload
        }
    }
    return state
}