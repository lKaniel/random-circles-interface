import {LOGIN_ERROR, GOOGLE_LOGIN_SUCCESS, LOGIN_SUCCESS} from "../actions/actionTypes";

const initialState = {
    token: "",
    user: {

    }
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case GOOGLE_LOGIN_SUCCESS:{
            return {
                ...state,
                token: action.token
            }
        }
        case LOGIN_SUCCESS:{
            console.log(action.user)
            return {
                ...state,
                user: action.user
            }
        }
        case LOGIN_ERROR:{
            console.log(action.error)
            return state
        }
        default:
            return state;
    }
}
