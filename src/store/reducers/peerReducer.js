import {
    ADD_PEER_PROVIDER_USER, REMOVE_PEER_PROVIDER_USER,
    UPDATE_PEER_PROVIDER_DATA,
    UPDATE_PEER_PROVIDER_STATUS,
    UPDATE_PEER_PROVIDER_USERS,
    UPDATE_PEER_USERNAME
} from "../actions/actionTypes";
import {clearConnections, connectToPeer} from "../../util/peer";

const initialState = {
    provider: {
        brokerId: "",
        connections: [],
        error: "",
        data: {
            users: []
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
        case ADD_PEER_PROVIDER_USER: {
            const users = [...state.provider.data.users];
            const user = users.find(user => user.peer_id === action.user.peer_id)
            if (user !== undefined) return state
            users.push(action.user)
            return {
                ...state,
                provider: {
                    ...state.provider,
                    data: {
                        ...state.provider.data,
                        users
                    }
                }
            }
        }
        case REMOVE_PEER_PROVIDER_USER: {
            let users = [...state.provider.data.users];
            users = users.filter(user => user.peer_id !== action.user.peer_id)
            return {
                ...state,
                provider: {
                    ...state.provider,
                    data: {
                        ...state.provider.data,
                        users
                    }
                }
            }
        }
        // case UPDATE_PEER_PROVIDER_USERS: {
        //     const connections = {}
        //     const users = action.users.map((user) => {
        //         const connection = connectToPeer(user.peer_id)
        //         connections[user.peer_id] = connection
        //         return {
        //             ...user,
        //             connection
        //         }
        //     })
        //     clearConnections(connections)
        //     return {
        //         ...state,
        //         provider: {
        //             ...state.provider,
        //             data: {
        //                 ...state.provider.data,
        //                 users
        //             }
        //         }
        //     }
        // }
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
