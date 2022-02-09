import {fork, put, select, takeEvery} from "redux-saga/effects";
import {
    AUTHORIZE_PEER_USER,
    LOGIN_START, PEER_CONNECTION_FROM_CLOSE,
    PEER_CONNECTION_FROM_OPEN, PEER_CONNECTION_TO_OPEN,
    PEER_PROVIDER_OPEN,
} from "../actions/actionTypes";
import {connectToLobby} from "../../util/lobbyApi";

function* peerOpenWatcher() {
    yield takeEvery(PEER_PROVIDER_OPEN, function* ({id}) {
        console.log(`MY PEER ID IS ${id}`)
    })
}

function* peerConnectionFromWatcher() {
    yield takeEvery(PEER_CONNECTION_FROM_OPEN, function* ({conn}) {
        console.log("NEW CONNECTION")
        console.log(conn)
    })
}

function* peerConnectionFromCloseWatcher() {
    yield takeEvery(PEER_CONNECTION_FROM_CLOSE, function* ({conn}) {
        console.log("CLOSED CONNECTION")
    })
}

function* peerConnectionToWatcher() {
    yield takeEvery(PEER_CONNECTION_TO_OPEN, function* ({conn}) {
        const peer_id = yield select(state => state.auth.user.peer_id)
        console.log("CONNECTED TO HOST")
        conn.send({
            type: AUTHORIZE_PEER_USER,
            peer_id
        })
    })
}

function* peerAuthorizeUser() {
    yield takeEvery(AUTHORIZE_PEER_USER, function* ({peer_id}) {
        console.log(`STARTED USER AUTH FROM ${peer_id}`)
        const token = yield select(state => state.auth.token);
        const lobby = yield connectToLobby(token)
        const user = lobby.users.find(user => user.peer_id === peer_id)
        if (user === undefined){}
    })
}

export function* peerListenerSaga() {
    yield fork(peerOpenWatcher);
    yield fork(peerConnectionFromWatcher);
    yield fork(peerConnectionFromCloseWatcher);
    yield fork(peerConnectionToWatcher);
    yield fork(peerAuthorizeUser);
}
