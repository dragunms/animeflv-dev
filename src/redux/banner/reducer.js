import {CLOSE_BANNER_SUCCESS, INIT_BANNER_SUCCESS} from 'src/constants/actionTypes';

const INIT_STATE = {
    isShowBanner: false,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case INIT_BANNER_SUCCESS:
            return {
                ...state,
                isShowBanner: action.payload.isShowBanner,
            };

        case CLOSE_BANNER_SUCCESS:
            return {
                ...state,
                isShowBanner: action.payload.isShowBanner,
            };

        default:
            return state;
    }
};
