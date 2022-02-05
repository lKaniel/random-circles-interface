import {fork, put, takeEvery, select} from "redux-saga/effects";
import {CONNECT_TO_LOBBY} from "../actions/actionTypes";
import {connectToLobby, leaveLobby} from "../../util/lobbyApi";
import {updatePeerProviderUsers} from "../actions/peerActions";

function* connectWatcher() {
    yield takeEvery(CONNECT_TO_LOBBY, function* ({brokerId}) {
        try {
            const token = yield select(state => state.auth.token);
            const lobby = yield connectToLobby(brokerId, token)
            // yield setLobbyInfo(lobby)
            yield put(updatePeerProviderUsers(lobby.users))
            console.log(lobby)
        } catch (e) {
        }
    })
}

export function* lobbySaga() {
    yield fork(connectWatcher);
}
