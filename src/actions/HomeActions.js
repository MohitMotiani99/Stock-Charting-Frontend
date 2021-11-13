import * as HomeActionTypes from '../action-types/HomeActionTypes'

export function setAdmin(payload) {
    return {
        type: HomeActionTypes.SET_ADMIN,
        payload
    }
}
export function setLoggedIn(payload) {
    return {
        type: HomeActionTypes.SET_LOGGED_IN,
        payload
    }
}
export function setLoggedUser(payload) {
    return {
        type: HomeActionTypes.SET_LOGGED_USER,
        payload
    }
}
export function getLoggedUser(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8085/users/verify?username=${payload.username}&password=${payload.password}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                dispatch(setLoggedUser(data))
            })
            .catch(err => dispatch(setLoggedUser({
                userId: "",
                username: "",
                password: "",
                userType: "",
                email: "",
                mobile: "",
                confirmed: true
            })))
    }
}