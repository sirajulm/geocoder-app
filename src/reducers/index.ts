import { combineReducers } from 'redux';
import geoMarker from './geo-marker-reducer';
import geoAPIs from './geo-api-reducer';


const rootReducer = combineReducers({
    geoMarker,
    geoAPIs
});

export default rootReducer;