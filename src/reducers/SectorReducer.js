import * as SectorActionTypes from '../action-types/SectorActionTypes'

const initialState = {
    sectorList: [{
        sectorId: "",
        sectorName: "",
        brief: ""
    }]
}

export default function sectorReducer(state = initialState, action) {
    if (action.type == SectorActionTypes.SET_SECTOR_LIST) {
        return {
            ...state,
            sectorList: action.payload
        }
    }
    return state
}