import {SET_PEER} from "../actions/actionTypes";


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
