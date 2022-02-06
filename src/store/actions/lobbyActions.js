import {CONNECT_TO_LOBBY, LEAVE_LOBBY, SET_LOBBY_INFO} from "./actionTypes";

export function connectToLobby(){
    return {
        type: CONNECT_TO_LOBBY
    }
}

export function leaveLobby(){
    return {
        type: LEAVE_LOBBY
    }
}

export function setLobbyInfo({filled, users}){
    return{
        type: SET_LOBBY_INFO,
        filled,
        users
    }
}
