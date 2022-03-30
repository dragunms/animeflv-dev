import {CLOSE_BANNER, GET_BANNER} from 'src/constants/actionTypes';

export const getBanner = (key) => {
    return {
        type: GET_BANNER,
        payload: {
            key,
        },
    };
};

export const closeBanner = () => {
    return {
        type: CLOSE_BANNER,
    };
};
