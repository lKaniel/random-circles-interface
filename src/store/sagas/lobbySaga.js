import {fork, put, takeEvery} from "redux-saga/effects";
import {CONNECT_TO_LOBBY} from "../actions/actionTypes";
import {connectToLobby} from "../../util/lobbyApi";
import {updatePeerUsername} from "../actions/peerActions";

function* connectWatcher() {
    yield takeEvery(CONNECT_TO_LOBBY, function* ({brokerId}) {
        try {
            const username = yield connectToLobby(brokerId)
            yield put(updatePeerUsername(username))
            // yield put(googleLoginSuccess(apiToken))
        } catch (e) {
            // yield put(loginError(e))
        }
    })
}

export function* lobbySaga() {
    yield fork(connectWatcher);
}
