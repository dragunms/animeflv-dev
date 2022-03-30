import {all, put, takeEvery} from 'redux-saga/effects';
import {INIT_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, SERVER_RENDERED, INIT_BANNER} from 'src/constants/actionTypes';
import {CACHE_BANNER_HISTORY, CACHE_IS_LOGIN} from 'src/constants/cacheKeys';

import {getCacheLocalStorage} from 'src/utilities/util';

function* watchServerRendered() {
    yield takeEvery(SERVER_RENDERED, function* (action) {
        const isLogin = getCacheLocalStorage(CACHE_IS_LOGIN);

        if (isLogin) {
            yield put({
                type: LOGIN_SUCCESS,
            });
        } else {
            yield put({
                type: LOGOUT_SUCCESS,
            });
        }

        const isShowPopup = yield sessionStorage.getItem(CACHE_BANNER_HISTORY);
        if (!isShowPopup) {
            yield put({
                type: INIT_BANNER,
            });
        }

        yield put({
            type: INIT_SUCCESS,
        });
    });
}

export default function* rootSaga() {
    yield all([watchServerRendered()]);
}
