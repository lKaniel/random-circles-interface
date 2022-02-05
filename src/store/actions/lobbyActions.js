import {CONNECT_TO_LOBBY} from "./actionTypes";

export function connectToLobby(brokerId){
    return {
        type: CONNECT_TO_LOBBY,
        brokerId
    }
}
