import { combineReducers } from 'redux';
import geoMarker from './geo-marker-reducer';


const rootReducer = combineReducers({
    geoMarker,
});

export default rootReducer;