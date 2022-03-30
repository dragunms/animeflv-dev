import {all} from 'redux-saga/effects';

import init from 'src/redux/init/saga';
import auth from 'src/redux/auth/saga';
import message from 'src/redux/message/saga';
import setting from 'src/redux/setting/saga';
import banner from 'src/redux/banner/saga';

export default function* rootSaga() {
    yield all([init(), auth(), setting(), message(), banner()]);
}
