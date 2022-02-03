import {fork, takeEvery} from "redux-saga/effects";
import {LOGIN_START} from "../actions/actionTypes";
import axios from "../../util/axios";

const getToken = async (googleIdToken)=>{
    return (await axios.post("/api/user", googleIdToken))?.headers?.authorization
}

const getUser = async (token)=>{
    return await axios.get("/api/user/profile", {
        headers: {
            Authorization: token
        }
    })
}

function* loginWatcher() {
    yield takeEvery(LOGIN_START, function*({googleIdToken}) {
        const apiToken = yield getToken(googleIdToken)
        console.log(apiToken)
        const user = yield getUser(apiToken)
        console.log(user)
    })
}

export function* loginSaga() {
    yield fork(loginWatcher);
}
