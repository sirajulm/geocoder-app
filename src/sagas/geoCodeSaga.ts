import { put, call } from 'redux-saga/effects';
import { fetchGeoCodeAPI } from '../api/geocode';
import * as types from '../constants/actionTypes';

export function* fetchGeoCode({ payload }: any) {
    try {
        const { data } = yield call(fetchGeoCodeAPI, payload);
        yield put({ type: types.ADD_MARKER, payload: data })
    } catch (error) {
        yield put({ type: types.FETCH_GEOCODE_ERROR, error });
    }
}
