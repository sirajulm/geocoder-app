import { all, fork } from 'redux-saga/effects';
import { watchGeoCodes, watchMarkers, watchMarkerDelete } from './watcher';


export default function* rootSaga() {
    yield all([
        fork(watchMarkers),
        fork(watchGeoCodes),
        fork(watchMarkerDelete),
    ]);
}