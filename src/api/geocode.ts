import axios from 'axios';
import { async } from 'q';
import { BASE_URL } from '../config'


const fetchGeoCodeAPI = async (payload: any) => {
    const GEOCODE_FETCH_API = `${BASE_URL}/geocode`;
    try {
        const data = await axios.post(GEOCODE_FETCH_API, {
            data: payload
        });
        return data;

    } catch (error) {
        throw error;
    }
}

const fetchMarkersAPI = async () => {
    const GEOMARKER_FETCH_API = `${BASE_URL}/markers`
    try {
        const data = await axios.get(GEOMARKER_FETCH_API);
        return data;

    } catch (error) {
        throw error;
    }
}

const deleteMarkerAPI = async (id: string) => {
    const GEOMARKER_DELETE_API = `${BASE_URL}/markers/${id}`
    try {
        const data = await axios.delete(GEOMARKER_DELETE_API);
        return data;

    } catch (error) {
        throw error;
    }
}


export { fetchGeoCodeAPI, fetchMarkersAPI, deleteMarkerAPI };
