import {fork, put, takeEvery} from "redux-saga/effects";
import {LOGIN_START, GOOGLE_LOGIN_SUCCESS} from "../actions/actionTypes";
import {loginError, googleLoginSuccess, loginSuccess} from "../actions/loginActions";
import {getToken, getUser} from "../../util/loginApi";

function* tokenWatcher() {
    yield takeEvery(LOGIN_START, function* ({googleIdToken}) {
        let apiToken = ""
        try {
            console.log(googleIdToken)
            apiToken = yield getToken(googleIdToken)
            console.log(apiToken)
            yield put(googleLoginSuccess(apiToken))
        } catch (e) {
            yield put(loginError(e))
        }
    })
}

function* userWatcher() {
    yield takeEvery(GOOGLE_LOGIN_SUCCESS, function* ({token}) {
        try {
            console.log(token)
            const user = yield getUser(token)
            console.log(user)
            yield put(loginSuccess(user.data))
        } catch (e) {
            yield put(loginError(e))
        }
    })
}

export function* loginSaga() {
    yield fork(tokenWatcher);
    yield fork(userWatcher);
}
