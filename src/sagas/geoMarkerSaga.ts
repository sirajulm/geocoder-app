import { put, call } from 'redux-saga/effects';
import { fetchMarkersAPI, deleteMarkerAPI, fetchGeoCodeAPI } from '../api/geocode';
import {
    fetMarkersSucess,
    fetMarkersError,
    addMarkerSuccess,
    addMarkerError,
    deleteMarkerSuccess,
    deleteMarkerError
} from '../actions/geoMarkers'

export function* fetchMarkers() {

    try {
        const { data } = yield call(fetchMarkersAPI);
        console.log('ddddd', data);
        yield put(fetMarkersSucess(data))
    } catch (error) {
        yield put(fetMarkersError(error));
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
        const { data } = yield call(fetchGeoCodeAPI, payload);
        yield put(addMarkerSuccess(data))
    } catch (error) {
        yield put(addMarkerError(error));
    }
}







