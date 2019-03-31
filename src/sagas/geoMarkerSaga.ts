import { put, call } from 'redux-saga/effects';
import { fetchMarkersAPI, deleteMarkerAPI, addMarkerAPI } from '../api/geocode';
import {
    fetchMarkersSucess,
    fetchMarkersError,
    addMarkerSuccess,
    addMarkerError,
    deleteMarkerSuccess,
    deleteMarkerError
} from '../actions/geoMarkers'

export function* fetchMarkers() {

    try {
        const { data } = yield call(fetchMarkersAPI);
        yield put(fetchMarkersSucess(data))
    } catch (error) {
        yield put(fetchMarkersError(error));
    }

}

export function* deleteMarker(action: any) {
    try {
        const { data } = yield call(deleteMarkerAPI, action.id)
        yield put(deleteMarkerSuccess(data.id))

    } catch (error) {
        yield put(deleteMarkerError(error))
    }
}

export function* addMarker({ payload }: any) {
    try {
        const { data } = yield call(addMarkerAPI, payload);
        yield put(addMarkerSuccess(data))
    } catch (error) {
        yield put(addMarkerError(error));
    }
}







