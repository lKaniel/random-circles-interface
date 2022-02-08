import {fork, put, takeEvery, select} from "redux-saga/effects";
import {CONNECT_TO_LOBBY, LEAVE_LOBBY} from "../actions/actionTypes";
import {connectToLobby, leaveLobby} from "../../util/lobbyApi";
import {setLobbyInfo} from "../actions/lobbyActions";
import {connectToPeer} from "../../util/peer";

function* connectWatcher() {
    yield takeEvery(CONNECT_TO_LOBBY, function* () {
        try {
            const token = yield select(state => state.auth.token);
            const lobby = yield connectToLobby(token)
            console.log(lobby)
            // yield put(setLobbyInfo(lobby))
            // yield connectToPeer()
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
