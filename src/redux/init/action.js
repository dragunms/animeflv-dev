import {DETECT_DEVICE, SERVER_RENDERED} from 'src/constants/actionTypes';

export const detectDevice = (device) => {
    return {
        type: DETECT_DEVICE,
        payload: {
            device,
        },
    };
};

export const detectServerRendered = () => {
    return {
        type: SERVER_RENDERED,
    };
};
