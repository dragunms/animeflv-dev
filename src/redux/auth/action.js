import {
    LOGOUT,
    REGISTER_EMAIL,
    LOGIN_WITH_FACEBOOK,
    LOGIN_WITH_GOOGLE,
    RESET_PASSWORD,
    VERIFY_EMAIL,
    SEND_EMAIL_FORGOT,
    CLEAR_AUTH_WAITING,
    CHANGE_PASSWORD,
    LOGIN_WITH_EMAIL,
} from 'src/constants/actionTypes';

export function postLoginWithEmail(email, password) {
    return {
        type: LOGIN_WITH_EMAIL,
        payload: {
            email,
            password,
        },
    };
}

export function loginFacebook(token) {
    return {
        type: LOGIN_WITH_FACEBOOK,
        payload: {
            token,
        },
    };
}

export function loginGoogle(token) {
    return {
        type: LOGIN_WITH_GOOGLE,
        payload: {
            token,
        },
    };
}

export function logout() {
    return {
        type: LOGOUT,
    };
}

export function registerEmail(email, password, name) {
    return {
        type: REGISTER_EMAIL,
        payload: {
            email,
            password,
            name,
        },
    };
}

// eslint-disable-next-line camelcase
export function resetPassword(email, otp, new_password) {
    return {
        type: RESET_PASSWORD,
        payload: {
            email,
            otp,
            new_password,
        },
    };
}

export function verifyEmail(email, otp) {
    return {
        type: VERIFY_EMAIL,
        payload: {
            email,
            otp,
        },
    };
}

export function sendEmailForgot(email) {
    return {
        type: SEND_EMAIL_FORGOT,
        payload: {
            email,
        },
    };
}

export function clearWaiting() {
    return {
        type: CLEAR_AUTH_WAITING,
    };
}

export function changePassword(password, newPassword) {
    return {
        type: CHANGE_PASSWORD,
        payload: {
            password,
            new_password: newPassword,
        },
    };
}
