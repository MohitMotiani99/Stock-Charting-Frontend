import * as UserActionTypes from '../action-types/UserActionTypes'

export function setUserList(payload) {
    return {
        type: UserActionTypes.SET_USER_LIST,
        payload
    }
}

export function getUserList() {
    return async function (dispatch) {
        const res = fetch('http://localhost:8085/users/', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => dispatch(setUserList(data)))
            .catch(err => console.log(err))

    }
}


export function saveUser(payload) {
    return async function (dispatch) {
        const res = fetch('http://localhost:8085/users/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then((data) => {
                console.log("Saved")
                return data === "" ? {} : dispatch(getUserList())
            })
            .catch(err => console.log(err))

    }
}

export function deleteUser(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8085/users/delete?userId=${payload}`, {
            method: 'DELETE',
        })
            .then(() => dispatch(getUserList()))
            .catch(err => console.log(err))
    }
}

export function updateUser(payload) {
    return async function (dispatch) {
        const res = fetch(`http://localhost:8085/users/update?userId=${payload.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then((data) => {
                console.log("Saved")
                return data === "" ? {} : dispatch(getUserList())
            })
            .catch(err => console.log(err))

    }
}
