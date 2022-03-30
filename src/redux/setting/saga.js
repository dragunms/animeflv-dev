import {all, put, takeLatest, fork} from 'redux-saga/effects';

import {INIT_SETTING, INIT_SETTING_SUCCESS} from 'src/constants/actionTypes';

import {loadDataAPI} from 'src/redux/util';
import SettingServiceApi from 'src/api/SettingServiceApi';

function* watchInitSetting() {
    yield takeLatest(INIT_SETTING, function* (action) {
        const response = yield loadDataAPI(action, SettingServiceApi.getSettingData);
        if (response.success) {
            yield put({
                type: INIT_SETTING_SUCCESS,
                payload: {
                    data: response.data,
                },
            });
        }
    });
}

export default function* rootSaga() {
    yield all([fork(watchInitSetting)]);
}
