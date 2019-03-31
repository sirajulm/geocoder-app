import * as types from '../constants/actionTypes';

/**
 *  Action Creators for fetching markers
 */
export const fetchMarkers = () => {
    return {
        type: types.FETCH_MARKERS
    }
};

export const fetchMarkersSucess = (payload: any) => {
    return {
        type: types.FETCH_MARKERS_SUCCESS,
        payload
    }
}

export const fetchMarkersError = (error: any) => {
    return {
        type: types.FETCH_MARKERS_ERROR,
        error
    }
}

/**
 *  Action Creators for adding markers
 */
export const addMarker = (payload: any) => {
    return {
        type: types.ADD_MARKER,
        payload
    }
};

export const addMarkerSuccess = (payload: any) => {
    return {
        type: types.ADD_MARKER_SUCCESS,
        payload
    }
};

export const addMarkerError = (error: any) => {
    return {
        type: types.ADD_MARKER_ERROR,
        error
    }
};

/**
 *  Action Creators for deleting Markers
 */
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
