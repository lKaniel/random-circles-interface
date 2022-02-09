import {
    ADD_PEER_PROVIDER_USER, CONNECT_TO_PEER, INNIT_PEER, REMOVE_PEER_PROVIDER_USER, SET_PEER,
    UPDATE_PEER_PROVIDER_DATA,
    UPDATE_PEER_PROVIDER_STATUS,
    UPDATE_PEER_PROVIDER_USERS,
    UPDATE_PEER_USERNAME
} from "./actionTypes";


export function addPeerProviderUser(user) {
    return {
        type: ADD_PEER_PROVIDER_USER,
        user
    }
}

export function removePeerProviderUser(userId) {
    return {
        type: REMOVE_PEER_PROVIDER_USER,
        userId
    }
}

export function updatePeerProviderUsers(users) {
    return {
        type: UPDATE_PEER_PROVIDER_USERS,
        users
    }
}

export function updatePeerUsername(username) {
    return {
        type: UPDATE_PEER_USERNAME,
        username
    }
}

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
