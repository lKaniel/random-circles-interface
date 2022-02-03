import {combineReducers} from "redux";
import appSideReducer from "./appSideReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
    appSide: appSideReducer,
    auth: loginReducer
})
