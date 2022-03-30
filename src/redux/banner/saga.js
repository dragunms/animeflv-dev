import {all, put, takeLatest} from 'redux-saga/effects';

import {INIT_BANNER, INIT_BANNER_SUCCESS, CLOSE_BANNER, CLOSE_BANNER_SUCCESS} from 'src/constants/actionTypes';

import {CACHE_BANNER_HISTORY} from 'src/constants/cacheKeys';

function* watchShowPopup() {
    yield takeLatest(INIT_BANNER, function* (action) {
        yield put({
            type: INIT_BANNER_SUCCESS,
            payload: {
                isShowBanner: true,
            },
        });
    });
}

function* watchClosePopup() {
    yield takeLatest(CLOSE_BANNER, function* (action) {
        yield sessionStorage.setItem(CACHE_BANNER_HISTORY, true);
        yield put({
            type: CLOSE_BANNER_SUCCESS,
            payload: {
                isShowBanner: false,
            },
        });
    });
}

export default function* rootSaga() {
    yield all([watchShowPopup(), watchClosePopup()]);
}
