import {combineReducers} from "redux";
import appSideReducer from "./appSideReducer";
import loginReducer from "./loginReducer";
import peerReducer from "./peerReducer";

export default combineReducers({
    appSide: appSideReducer,
    auth: loginReducer,
    peer: peerReducer
})
