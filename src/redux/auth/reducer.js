import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    GET_PROFILE_SUCCESS,
    REGISTER_EMAIL_SUCCESS,
    SEND_EMAIL_FORGOT_SUCCESS,
    CLEAR_AUTH_WAITING,
    RESET_PASSWORD_SUCCESS,
} from 'src/constants/actionTypes';

const INIT_STATE = {
    isLogin: undefined,
    profile: null,
    waitingVerifyEmail: false,
    waitingVerifyForgotEmail: false,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload.profile,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLogin: false,
                profile: null,
            };

        case REGISTER_EMAIL_SUCCESS:
            return {
                ...state,
                waitingVerifyEmail: true,
            };
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                waitingVerifyEmail: false,
            };

        case SEND_EMAIL_FORGOT_SUCCESS:
            return {
                ...state,
                waitingVerifyForgotEmail: true,
            };

        case CLEAR_AUTH_WAITING:
            return {
                ...state,
                waitingVerifyEmail: false,
                waitingVerifyForgotEmail: false,
            };

        default:
            return state;
    }
};
