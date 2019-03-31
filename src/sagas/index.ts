import { all, fork } from 'redux-saga/effects';
import { watchMarkerAdd, watchMarkers, watchMarkerDelete } from './watcher';


export default function* rootSaga() {
    yield all([
        fork(watchMarkers),
        fork(watchMarkerAdd),
        fork(watchMarkerDelete),
    ]);
}