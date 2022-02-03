import {LOGIN_START} from "./actionTypes";

export function loginStart(googleIdToken){
    return{
        type: LOGIN_START,
        googleIdToken
    }
}
