import { takeLatest, takeEvery } from 'redux-saga/effects';
import { fetchMarkers, deleteMarker, addMarker } from './geoMarkerSaga';
import * as types from '../constants/actionTypes';


function* watchMarkerAdd() {
    yield takeLatest(types.ADD_MARKER, addMarker);
}

function* watchMarkers() {
    yield takeLatest(types.FETCH_MARKERS, fetchMarkers);
}

function* watchMarkerDelete() {
    yield takeLatest(types.DELETE_MARKER, deleteMarker)
}


export { watchMarkerAdd, watchMarkers, watchMarkerDelete }