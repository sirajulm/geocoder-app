import initialState from './initialState';
import * as types from '../constants/actionTypes';
import _ from 'lodash';
export default function (state = initialState.geoMarkers, action: any) {


    switch (action.type) {

        case types.FETCH_MARKERS_SUCCESS: {
            const newState = {
                ...initialState.geoMarkers,
                ...action.payload
            }
            return newState
        }

        case types.ADD_MARKER: {

            const newState = {
                ...state,
                ...{ [action.payload.id]: { ...action.payload } }
            }
            return newState;
        }

        case types.EDIT_MARKER: {
            // TODO
            const newState = {
                ...state,
                // ...{ [action.payload.id]: { ...state[action.payload.id], ...action.payload.marker } }
            }

            return newState;
        }
        case types.DELETE_MARKER: {
            const id: string = action.id;
            // TODO

            const newState = { ...state }
            return newState;
        }

        case types.DELETE_MARKER_SUCCESS: {
            const { id } = action;
            const newState = _.omit(state, [id])
            return newState;
        }

        case types.DELETE_MARKER_ERROR: {
            const newState = { ...state }
            return newState;
        }

        default:
            return { ...state };
    }
}