import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.geoAPIs, action: any) {


    switch (action.type) {
        // case types.FETCH_GEOCODE: {
        //     const newState = {
        //         ...state,
        //         fetching: true
        //     }

        //     return newState;
        // }

        default:
            return { ...state };
    }
}