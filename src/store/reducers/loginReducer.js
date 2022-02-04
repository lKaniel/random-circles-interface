import {LOGIN_ERROR, GOOGLE_LOGIN_SUCCESS, LOGIN_SUCCESS, LOGIN_START} from "../actions/actionTypes";

const initialState = {
    token: "",
    isLogging: false,
    isSignedIn: false,
    user: {

    }
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:{
            return {
                ...state,
                isLogging: true
            }
        }
        case GOOGLE_LOGIN_SUCCESS:{
            return {
                ...state,
                token: action.token
            }
        }
        case LOGIN_SUCCESS:{
            return {
                ...state,
                user: action.user,
                isSignedIn: true,
                isLogging: false
            }
        }
        case LOGIN_ERROR:{
            console.log(action.error)
            return {
                ...state,
                isLogging: false
            }
        }
        default:
            return state;
    }
}
