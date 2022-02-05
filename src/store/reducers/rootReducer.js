import {combineReducers} from "redux";
import appSideReducer from "./appSideReducer";
import loginReducer from "./loginReducer";
import peerReducer from "./peerReducer";
import lobbyReducer from "./lobbyReducer";

export default combineReducers({
    appSide: appSideReducer,
    auth: loginReducer,
    peer: peerReducer,
    lobby: lobbyReducer
})
