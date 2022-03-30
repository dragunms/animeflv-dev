import {all, put, takeLatest, fork} from 'redux-saga/effects';

import {
    LOGIN_WITH_EMAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGOUT_SUCCESS,
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    REGISTER_EMAIL_SUCCESS,
    REGISTER_EMAIL,
    VERIFY_EMAIL,
    SEND_EMAIL_FORGOT,
    SEND_EMAIL_FORGOT_SUCCESS,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    CHANGE_PASSWORD,
    PUT_SUCCESS,
} from 'src/constants/actionTypes';
import {HOME_PATH, LOGIN_PATH} from 'src/constants/subPaths';
import {CACHE_ACCESS_TOKEN, CACHE_IS_LOGIN} from 'src/constants/cacheKeys';

import {loadDataAPI} from 'src/redux/util';
import {setCacheLocalStorage} from 'src/utilities/util';

import AuthServiceAPI from 'src/api/AuthServiceAPI';

import history from 'src/history';

function* watchLoginWithEmail() {
    yield takeLatest(LOGIN_WITH_EMAIL, function* (action) {
        const response = yield loadDataAPI(
            action,
            AuthServiceAPI.postLoginWithEmail,
            action.payload.email,
            action.payload.password
        );

        if (response.success) {
            setCacheLocalStorage(CACHE_ACCESS_TOKEN, response.data.access_token);
            yield put({
                type: LOGIN_SUCCESS,
            });
            history.push(HOME_PATH.PATH);
        }
    });
}
function* watchRegisterEmail() {
    yield takeLatest(REGISTER_EMAIL, function* (action) {
        const response = yield loadDataAPI(
            action,
            AuthServiceAPI.postRegisterEmail,
            action.payload.email,
            action.payload.password,
            action.payload.name
        );
        if (response.success) {
            yield put({
                type: REGISTER_EMAIL_SUCCESS,
            });
        }
    });
}

function* watchVerifyEmail() {
    yield takeLatest(VERIFY_EMAIL, function* (action) {
        const response = yield loadDataAPI(
            action,
            AuthServiceAPI.postVerifyEmail,
            action.payload.email,
            action.payload.otp
        );
        if (response.success) {
            history.push(LOGIN_PATH.PATH);
        }
    });
}

function* watchSendEmailForgot() {
    yield takeLatest(SEND_EMAIL_FORGOT, function* (action) {
        const response = yield loadDataAPI(action, AuthServiceAPI.postSendForgotEmail, action.payload.email);
        if (response.success) {
            yield put({
                type: SEND_EMAIL_FORGOT_SUCCESS,
            });
        }
    });
}

function* watchResetPassword() {
    yield takeLatest(RESET_PASSWORD, function* (action) {
        const response = yield loadDataAPI(
            action,
            AuthServiceAPI.postResetPassword,
            action.payload.email,
            action.payload.otp,
            action.payload.new_password
        );

        if (response.success) {
            yield put({
                type: RESET_PASSWORD_SUCCESS,
            });
            history.replace(LOGIN_PATH.PATH);
        }
    });
}

function* watchLoginSuccess() {
    yield takeLatest(LOGIN_SUCCESS, function* (action) {
        setCacheLocalStorage(CACHE_IS_LOGIN, true);
        yield put({
            type: GET_PROFILE,
        });
    });
}

function* watchLogout() {
    yield takeLatest(LOGOUT, function* (action) {
        const response = yield loadDataAPI(action, AuthServiceAPI.postLogout);

        if (response.success) {
            localStorage.removeItem(CACHE_ACCESS_TOKEN);
            setCacheLocalStorage(CACHE_IS_LOGIN, false);
            yield put({
                type: LOGOUT_SUCCESS,
            });
            history.replace(LOGIN_PATH.PATH);
        }
    });
}

function* watchGetMyProfile() {
    yield takeLatest(GET_PROFILE, function* (action) {
        const response = yield loadDataAPI(action, AuthServiceAPI.getInfoProfile);

        if (response.success) {
            yield put({
                type: GET_PROFILE_SUCCESS,
                payload: {
                    profile: response.data,
                },
            });
        }
    });
}
function* watchPostChangePassword() {
    yield takeLatest(CHANGE_PASSWORD, function* (action) {
        const response = yield loadDataAPI(
            action,
            AuthServiceAPI.postChangePassword,
            action.payload.password,
            action.payload.new_password
        );

        if (response.success) {
            yield put({
                type: PUT_SUCCESS,
                payload: {
                    messages: 'Change Password Success.',
                },
            });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginWithEmail),
        fork(watchLoginSuccess),
        fork(watchGetMyProfile),
        fork(watchRegisterEmail),
        fork(watchVerifyEmail),
        fork(watchSendEmailForgot),
        fork(watchLogout),
        fork(watchResetPassword),
        fork(watchPostChangePassword),
    ]);
}
