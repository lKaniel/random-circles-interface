import {
    UPDATE_PEER_PROVIDER_DATA,
    UPDATE_PEER_PROVIDER_STATUS,
    UPDATE_PEER_PROVIDER_USERS,
    UPDATE_PEER_USERNAME
} from "./actionTypes";

export function updatePeerProviderStatus(brokerId, connections, error) {
    return {
        type: UPDATE_PEER_PROVIDER_STATUS,
        brokerId,
        connections,
        error
    }
}

export function updatePeerProviderData(data) {
    return {
        type: UPDATE_PEER_PROVIDER_DATA,
        data
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
