import {call, spawn, all} from "redux-saga/effects";
import {eventListenerSaga} from "./eventListenerSaga";
import {loginSaga} from "./loginSaga";
import {lobbySaga} from "./lobbySaga";

export default function* rootSaga() {
    const sagas = [
        eventListenerSaga,
        loginSaga,
        lobbySaga
    ]

    const retrySagas = yield sagas.map(saga => (
        spawn(function* () {

            while (true){
                try {
                    yield call(saga)
                    break;
                }catch (e){
                    console.log(e)
                }
            }

        })))

    yield all(retrySagas)
}
