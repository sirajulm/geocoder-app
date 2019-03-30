import * as types from '../constants/actionTypes';


export const fetchGeoCode = (payload: any) => {
    console.log('pppp', payload)
    return {
        type: types.FETCH_GEOCODE,
        payload
    }
};
