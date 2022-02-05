import {
    UPDATE_PEER_PROVIDER_DATA,
    UPDATE_PEER_PROVIDER_STATUS,
    UPDATE_PEER_PROVIDER_USERS,
    UPDATE_PEER_USERNAME
} from "../actions/actionTypes";

const initialState = {
    provider: {
        brokerId: "",
        connections: [],
        error: "",
        data: {
            users:[

            ]
        }
    }
};

export default function peerReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PEER_PROVIDER_STATUS: {
            return {
                ...state,
                provider: {
                    ...state.provider,
                    brokerId: action.brokerId,
                    connections: action.connections,
                    error: action.error
                }
            }
        }
        case UPDATE_PEER_PROVIDER_DATA: {
            return {
                ...state,
                provider: {
                    ...state.provider,
                    data: action.data
                }
            }
        }
        case UPDATE_PEER_PROVIDER_USERS: {
            console.log(action)
            return {
                ...state,
                provider: {
                    ...state.provider,
                    data: {
                        ...state.provider.data,
                        users: action.users
                    }
                }
            }
        }
        case UPDATE_PEER_USERNAME: {
            return {
                ...state,
                provider: {
                    ...state.provider,
                    data: {
                        ...state.provider.data,
                        username: action.username
                    }
                }
            }
        }
        default:
            return state;
    }
}
