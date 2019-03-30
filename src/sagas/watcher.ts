import { takeLatest, takeEvery } from 'redux-saga/effects';
import { fetchGeoCode } from './geoCodeSaga';
import { fetchMarkers, deleteMarker } from './geoMarkerSaga';
import * as types from '../constants/actionTypes';


function* watchGeoCodes() {
    yield takeLatest(types.FETCH_GEOCODE, fetchGeoCode);
}

function* watchMarkers() {
    yield takeLatest(types.FETCH_MARKERS, fetchMarkers);
}

function* watchMarkerDelete() {
    yield takeLatest(types.DELETE_MARKER, deleteMarker)
}


export { watchGeoCodes, watchMarkers, watchMarkerDelete }