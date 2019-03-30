import * as types from '../constants/actionTypes';

export const fetchMarkers = () => {
    return {
        type: types.FETCH_MARKERS
    }
};

export const fetMarkersSucess = (payload: any) => {
    return {
        type: types.FETCH_MARKERS_SUCCESS,
        payload
    }
}

export const fetMarkersError = (error: any) => {
    return {
        type: types.FETCH_MARKERS_ERROR,
        error
    }
}

export const deleteMarker = (id: string) => {
    return {
        type: types.DELETE_MARKER,
        id
    }
}

export const deleteMarkerSuccess = (id: string) => {
    return {
        type: types.DELETE_MARKER_SUCCESS,
        id
    }
}

export const deleteMarkerError = (error: any) => {
    return {
        type: types.DELETE_MARKER_ERROR,
        error
    }
}
