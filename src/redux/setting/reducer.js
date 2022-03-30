import {INIT_SETTING_SUCCESS} from 'src/constants/actionTypes';

const INIT_STATE = {
    GOOGLE_ANALYTICS: '',
    GG_APP_ID_WEB: '',
    FB_APP_ID: '',
    HOTLINE: '',
    CONTACT_EMAIL: '',
    FB_FANPAGE_ID: '',
    MOIT_CER_URL: '',
    MOIT_CER_IMG: '',
    COMPANY_NAME: '',
    COMPANY_ADDRESS: '',
    TAX_CODE: '',
    TAX_DATE: '',
    APPLE_STORE_IMG: '',
    APPLE_STORE_URL: '',
    GOOGLE_PLAY_IMG: '',
    GOOGLE_PLAY_URL: '',
    QR_CODE_IMG: '',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case INIT_SETTING_SUCCESS:
            return {
                ...state,
                ...action.payload.data,
            };
        default:
            return state;
    }
};
