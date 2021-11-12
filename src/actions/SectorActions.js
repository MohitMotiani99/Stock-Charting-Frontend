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

export function saveSector(payload) {
    return async function (dispatch) {
        const res = fetch('http://localhost:8084/sectors/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then((data) => {
                console.log("Saved")
                return data === "" ? {} : dispatch(getSectorList())
            })
            .catch(err => console.log(err))

    }
}

export function deleteSector(payload) {
    return async function (dispatch) {
        fetch(`http://localhost:8084/sectors/delete?sectorId=${payload}`, {
            method: 'DELETE',
        })
            .then(() => dispatch(getSectorList()))
            .catch(err => console.log(err))
    }
}

export function updateSector(payload) {
    return async function (dispatch) {
        const res = fetch(`http://localhost:8084/sectors/update?sectorId=${payload.sectorId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.text())
            .then((data) => {
                console.log("Saved")
                return data === "" ? {} : dispatch(getSectorList())
            })
            .catch(err => console.log(err))

    }
}
