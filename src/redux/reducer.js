import {combineReducers} from 'redux';

import init from './init/reducer';
import auth from './auth/reducer';
import process from './process/reducer';
import metadata from './metadata/reducer';
import setting from './setting/reducer';
import banner from './banner/reducer';

const reducer = combineReducers({
    init,
    auth,
    process,
    metadata,
    setting,
    banner,
});

export default reducer;
