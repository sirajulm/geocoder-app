import initialState from './initialState';
import * as types from '../constants/actionTypes';
import _ from 'lodash';

export default function (state = initialState.geoMarkers, action: any) {

    switch (action.type) {

        case types.FETCH_MARKERS: {
            const newState = { ...state, error: '' };
            return newState;
        }

        case types.FETCH_MARKERS_SUCCESS: {
            const newState = {
                ...initialState.geoMarkers,
                results: { ...action.payload },
                error: ''
            }
            return newState
        }

        case types.FETCH_MARKERS_ERROR: {

            const errorMessage =
                _.get(action.error, 'response.data.error', undefined) ||
                _.get(action.error, 'message', undefined) ||
                'Server Error';

            const newState = { ...state, error: errorMessage };
            return newState;
        }

        case types.ADD_MARKER: {
            const newState = { ...state, error: '' };
            return newState;
        }

        case types.ADD_MARKER_SUCCESS: {
            const newState = {
                ...state,
                results: { ...state.results, ...{ [action.payload.id]: { ...action.payload } } },
                error: ''
            }
            return newState;
        }

        case types.ADD_MARKER_ERROR: {
            console.log(action)
            const errorMessage =
                _.get(action.error, 'response.data.error', undefined) ||
                _.get(action.error, 'message', undefined) ||
                'Server Error';

            const newState = { ...state, error: errorMessage };
            return newState;
        }

        case types.DELETE_MARKER: {
            const id: string = action.id;
            const newState = { ...state, error: '' }
            return newState;
        }

        case types.DELETE_MARKER_SUCCESS: {
            const { id } = action;
            const newState = {
                ...state,
                results: _.omit(state.results, [id]),
                error: ''
            }
            return newState;
        }

        case types.DELETE_MARKER_ERROR: {
            const errorMessage =
                _.get(action.error, 'response.data.error', undefined) ||
                _.get(action.error, 'message', undefined) ||
                'Server Error';

            const newState = { ...state, error: errorMessage };
            return newState;
        }

        default:
            return { ...state };
    }
}