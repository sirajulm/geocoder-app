import axios from 'axios';
import { BASE_URL } from '../config'

// Fetches list of all markers
const fetchMarkersAPI = async () => {
    const GEOMARKER_FETCH_API = `${BASE_URL}/markers`
    try {
        const data = await axios.get(GEOMARKER_FETCH_API);
        return data;

    } catch (error) {
        throw error;
    }
}

// Add a new maker
const addMarkerAPI = async (payload: any) => {
    const GEOMARKER_ADD_API = `${BASE_URL}/markers`;
    try {
        const data = await axios.post(GEOMARKER_ADD_API, {
            data: payload
        });
        return data;

    } catch (error) {
        throw error;
    }
}

// Remove an existing marker
const deleteMarkerAPI = async (id: string) => {
    const GEOMARKER_DELETE_API = `${BASE_URL}/markers/${id}`
    try {
        const data = await axios.delete(GEOMARKER_DELETE_API);
        return data;

    } catch (error) {
        throw error;
    }
}


export { addMarkerAPI, fetchMarkersAPI, deleteMarkerAPI };
