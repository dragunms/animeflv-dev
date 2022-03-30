import {DEVICE} from 'src/constants/system';
import {DETECT_DEVICE, SERVER_RENDERED, INIT_SUCCESS} from 'src/constants/actionTypes';

const INIT_STATE = {
    success: false,
    isClient: false,
    domain: 'drama9.me',
    device: {
        type: DEVICE.DESKTOP,
        width: 0,
        height: 0,
        os: '',
    },
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SERVER_RENDERED:
            return {
                ...state,
                isClient: true,
            };
        case INIT_SUCCESS:
            return {
                ...state,
                success: true,
            };
        case DETECT_DEVICE:
            return {
                ...state,
                device: {
                    ...state.device,
                    ...action.payload.device,
                },
            };

        default:
            return state;
    }
};
