import {fork, put, takeEvery, select} from "redux-saga/effects";
import {CONNECT_TO_LOBBY, LEAVE_LOBBY} from "../actions/actionTypes";
import {connectToLobby, leaveLobby} from "../../util/lobbyApi";
import {setLobbyInfo} from "../actions/lobbyActions";
import {getUser} from "../../util/loginApi";
import {connectToPeer} from "../actions/peerActions";

function* connectWatcher() {
    yield takeEvery(CONNECT_TO_LOBBY, function* () {
        try {
            const token = yield select(state => state.auth.token);
            const lobby = yield connectToLobby(token)
            const host_id = lobby.host.id;
            const user_id = yield select(state => state.auth.user.id);
            if (host_id === user_id) return
            const host_peer = lobby.host.peer_id;
            yield put(connectToPeer(host_peer))
            // yield put(setLobbyInfo(lobby))
            // yield put(updatePeerProviderUsers(lobby.users))
        } catch (e) {
        }
    })
}

function* leaveWatcher() {
    yield takeEvery(LEAVE_LOBBY, function* () {
        try {
            const token = yield select(state => state.auth.token);
            yield leaveLobby(token)
            // yield put(updatePeerProviderUsers([]))
        } catch (e) {
        }
    })
}

export function* lobbySaga() {
    yield fork(connectWatcher);
    yield fork(leaveWatcher);
}
