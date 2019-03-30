import { put, call } from 'redux-saga/effects';
import { fetchMarkersAPI, deleteMMarkerAPI } from '../api/geocode';
import * as types from '../constants/actionTypes';
import { fetMarkersSucess, fetMarkersError, deleteMarkerSuccess, deleteMarkerError } from '../actions/geoMarkers'

export function* fetchMarkers() {

    try {
        const { data } = yield call(fetchMarkersAPI);
        yield put(fetMarkersSucess(data))
    } catch (error) {
        yield put(fetMarkersError(error));
    }

}

export function* deleteMarker(action: any) {
    try {
        const { data } = yield call(deleteMMarkerAPI, action.id)
        yield put(deleteMarkerSuccess(data.id))

    } catch (error) {
        yield put(deleteMarkerError(error))
    }
}



