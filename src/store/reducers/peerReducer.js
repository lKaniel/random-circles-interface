import {
    ADD_PEER_PROVIDER_USER, REMOVE_PEER_PROVIDER_USER, SET_PEER,
    UPDATE_PEER_PROVIDER_DATA,
    UPDATE_PEER_PROVIDER_STATUS,
    UPDATE_PEER_PROVIDER_USERS,
    UPDATE_PEER_USERNAME
} from "../actions/actionTypes";
import {clearConnections, connectToPeer} from "../../util/peer";

const initialState = {
    peer: undefined
};

export default function peerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PEER: {
            return {
                ...state,
                peer: action.peer,
            }
        }
        default:
            return state;
    }
}
