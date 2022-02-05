import {CONNECT_TO_LOBBY, SET_LOBBY_INFO} from "./actionTypes";

export function connectToLobby(brokerId){
    return {
        type: CONNECT_TO_LOBBY,
        brokerId
    }
}

export function setLobbyInfo({filled, users}){
    return{
        type: SET_LOBBY_INFO,
        filled,
        users
    }
}
