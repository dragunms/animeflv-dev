import _ from 'lodash';
import {all, fork, takeEvery, takeLatest} from 'redux-saga/effects';
import {toast} from 'react-toastify';

import {PUT_ERROR, PUT_SUCCESS, PUT_WARNING} from 'src/constants/actionTypes';
import errorCode from 'src/constants/errorCode';
import errorCodeTranslate from 'src/utilities/errorCodeTranslate';

function* watchPutSuccess() {
    yield takeEvery(PUT_SUCCESS, (action) => {
        toast.success(action.payload.messages);
    });
}

function* watchPutWarning() {
    yield takeLatest(PUT_WARNING, (action) => {
        toast.warning(action.payload.messages);
    });
}

function* watchPutError() {
    yield takeLatest(PUT_ERROR, function* (action) {
        let {errors} = action.payload;

        if (!_.isArray(errors)) {
            errors = [errors];
        }

        yield all(
            _.map(errors, (item) => {
                if (item && errorCode[item.code]) {
                    return toast.error(errorCodeTranslate[item.code]);
                }
            })
        );
    });
}

export default function* rootSaga() {
    yield all([fork(watchPutSuccess), fork(watchPutWarning), fork(watchPutError)]);
}
