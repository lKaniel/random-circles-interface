import {LOGIN_ERROR, LOGIN_START, GOOGLE_LOGIN_SUCCESS, LOGIN_SUCCESS} from "./actionTypes";

export function loginStart(googleIdToken){
    return{
        type: LOGIN_START,
        googleIdToken
    }
}

export function googleLoginSuccess(token){
    return{
        type: GOOGLE_LOGIN_SUCCESS,
        token
    }
}

export function loginSuccess(user){
    return{
        type: LOGIN_SUCCESS,
        user
    }
}

export function loginError(error){
    return{
        type: LOGIN_ERROR,
        error
    }
}