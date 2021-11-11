import * as SectorActionTypes from '../action-types/SectorActionTypes'

export function setSectorList(payload) {
    return {
        type: SectorActionTypes.SET_SECTOR_LIST,
        payload
    }
}

export function getSectorList() {
    console.log("hey")
    return async function (dispatch) {
        fetch('http://localhost:8084/sectors/', {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => dispatch(setSectorList(data)))
            .catch(err => console.log("Error UwU"))
    }
}