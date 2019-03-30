import axios from 'axios';
import { async } from 'q';

const BASE_URL = 'http://localhost:7000';
const GEOCODE_FETCH_API = `${BASE_URL}/geocode`;

const fetchGeoCodeAPI = async (payload: any) => {
    try {
        const data = await axios.post(GEOCODE_FETCH_API, {
            data: payload
        });
        return data;

    } catch (exception) {
        console.log(exception);
    }
}

const GEOMARKER_FETCH_API = `${BASE_URL}/markers`
const fetchMarkersAPI = async () => {
    try {
        const data = await axios.get(GEOMARKER_FETCH_API);
        return data;

    } catch (exception) {
        console.log(exception);
    }
}

const deleteMMarkerAPI = async (id: string) => {
    const GEOMARKER_DELETE_API = `${BASE_URL}/markers/${id}`
    try {
        const data = await axios.delete(GEOMARKER_DELETE_API);
        return data;

    } catch (exception) {
        console.log(exception);
    }
}


export { fetchGeoCodeAPI, fetchMarkersAPI, deleteMMarkerAPI };
