import {fork, put, select, takeEvery, take} from "redux-saga/effects";
import {
    CONNECT_TO_PEER,
    INNIT_PEER, PEER_CONNECTION_FROM_CLOSE, PEER_CONNECTION_FROM_OPEN, PEER_CONNECTION_TO_OPEN, PEER_PROVIDER_OPEN,
} from "../actions/actionTypes";
import {channel} from "redux-saga";
import {setPeer} from "../actions/peerActions";

let connections = {}
const redirectChannel = channel()

function* innitChannelWatcher() {
    while (true) {
        const action = yield take(redirectChannel)
        yield put(action)
    }
}

function* innitPeerWatcher() {
    yield takeEvery(INNIT_PEER, function* ({peer_id, username}) {
        if (typeof navigator === "undefined") return
        const Peer = require("peerjs").default
        const peer = new Peer(peer_id, {
            host: `evening-ridge-76087.herokuapp.com`,
            debug: 1,
            path: '/myapp',
            port: "80"
        });
        yield put(setPeer(peer))

        yield peer.on("open", (id) => redirectChannel.put({
            type: PEER_PROVIDER_OPEN,
            id
        }));
        yield peer.on("connection", (conn) => {
            conn.on("open", () => redirectChannel.put({
                type: PEER_CONNECTION_FROM_OPEN,
                conn
            }));
            conn.on("data", data => !data?.type ? null : redirectChannel.put(data))
            conn.on("close", () => redirectChannel.put({
                type: PEER_CONNECTION_FROM_CLOSE,
                conn
            }))
        });
    })
}

function* innitConnectToPeerWatcher() {
    yield takeEvery(CONNECT_TO_PEER, function* ({peer_id}) {
        const myPeerId = yield select(state => state.auth.user.peer_id)
        const peer = yield select(state => state.peer.peer)
        if (peer_id === myPeerId) return null
        console.log(peer_id)
        const conn = yield peer.connect(peer_id);
        console.log("CONNECTED")
        console.log(conn)

        conn.on("open", () => redirectChannel.put({
            type: PEER_CONNECTION_TO_OPEN,
            conn
        }));
    })
}

export function* peerSaga() {
    yield fork(innitChannelWatcher)
    yield fork(innitPeerWatcher)
    yield fork(innitConnectToPeerWatcher)
}
