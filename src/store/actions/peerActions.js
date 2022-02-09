import {
    CONNECT_TO_PEER, INNIT_PEER, SET_PEER,
} from "./actionTypes";

export function innitPeer(peer_id, username,) {
    return {
        type: INNIT_PEER,
        peer_id,
        username
    }
}

export function setPeer(peer) {
    return {
        type: SET_PEER,
        peer
    }
}

export function connectToPeer(peer_id) {
    return {
        type: CONNECT_TO_PEER,
        peer_id
    }
}
