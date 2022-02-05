import {SET_LOBBY_INFO} from "../actions/actionTypes";

const initialState = {
    filled: false,
    users: []
};

export default function lobbyReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOBBY_INFO:{
            return {
                ...state,
                filled: action.filled,
                users: action.users
            }
        }
        default:
            return state;
    }
}
