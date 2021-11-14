import * as UploadActionTypes from '../action-types/UploadActionTypes'

export function setHistPriceList(payload) {
    return {
        type: UploadActionTypes.SET_HIST_PRICE_LIST,
        payload
    }
}

export function getHistPriceList(payload) {

    const formData = new FormData()
    formData.append("file", payload.file)

    return async function (dispatch) {
        fetch(`http://localhost:8086/prices/upload/${payload.stockExchangeName}/${payload.companyName}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(setHistPriceList(data))
            })
            .catch(err => console.log(err))
    }
}