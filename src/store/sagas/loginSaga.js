import {fork, put, takeEvery} from "redux-saga/effects";
import {LOGIN_START, GOOGLE_LOGIN_SUCCESS} from "../actions/actionTypes";
import {loginError, googleLoginSuccess, loginSuccess} from "../actions/loginActions";
import {getToken, getUser} from "../../util/loginApi";
import {connectToLobby} from "../actions/lobbyActions";
import {innitPeer} from "../actions/peerActions";

function* tokenWatcher() {
    yield takeEvery(LOGIN_START, function* ({googleIdToken}) {
        let apiToken = ""
        try {
            apiToken = yield getToken(googleIdToken)
            yield put(googleLoginSuccess(apiToken))
        } catch (e) {
            yield put(loginError(e))
        }
    })
}

function* userWatcher() {
    yield takeEvery(GOOGLE_LOGIN_SUCCESS, function* ({token}) {
        try {
            const user = yield getUser(token)
            yield put(loginSuccess(user.data))
            yield put(innitPeer(user.data.peer_id, user.data.username))
        } catch (e) {
            yield put(loginError(e))
        }
    })
}

export function* loginSaga() {
    yield fork(tokenWatcher);
    yield fork(userWatcher);
}
