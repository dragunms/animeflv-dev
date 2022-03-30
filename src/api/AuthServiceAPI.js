import {
    CHANGE_PASSWORD_ENDPOINT,
    CHANGE_PROFILE_ENDPOINT,
    GET_PROFILE_ENDPOINT,
    LOGIN_WITH_EMAIL_ENDPOINT,
    LOGIN_BY_PHONE_ENDPOINT,
    LOGIN_WITH_APPLE_ENDPOINT,
    LOGIN_WITH_FACEBOOK_ENDPOINT,
    LOGIN_WITH_GOOGLE_ENDPOINT,
    LOGOUT_ENDPOINT,
    REGISTER_ENDPOINT,
    RESET_PASSWORD_ENDPOINT,
    SEND_OTP_EMAIL_VERIFY_FORGOT_ENDPOINT,
    SEND_OTP_PHONE_ENDPOINT,
    VERIFY_EMAIL_ENDPOINT,
    VERIFY_OTP_FORGOT_PASSWORD_ENDPOINT,
    VERIFY_PHONE_ENDPOINT,
    CREATE_PASSWORD_ENDPOINT,
    LOGIN_ENDPOINT,
} from 'src/constants/apiEndpoints';

import {getData, postData} from 'src/utilities/requestApi';

const AuthServiceAPI = {
    // eslint-disable-next-line camelcase
    postLoginWithPhone: (phone_number, otp) => {
        return postData(LOGIN_BY_PHONE_ENDPOINT, {
            phone_number,
            otp,
        });
    },
    postLogin: (username, password) => {
        return postData(LOGIN_ENDPOINT, {username, password});
    },
    postLoginWithEmail: (email, password) => {
        return postData(LOGIN_WITH_EMAIL_ENDPOINT, {email, password});
    },
    postLoginWithFacebook: (token) => {
        return postData(LOGIN_WITH_FACEBOOK_ENDPOINT, {token});
    },
    postLoginWithGoogle: (token) => {
        return postData(LOGIN_WITH_GOOGLE_ENDPOINT, {token});
    },
    postLoginWithApple: (token, name) => {
        return postData(LOGIN_WITH_APPLE_ENDPOINT, {token, name});
    },

    postRegisterEmail: (email, password, name) => {
        return postData(REGISTER_ENDPOINT, {email, password, name});
    },
    postVerifyEmail: (email, otp) => {
        return postData(VERIFY_EMAIL_ENDPOINT, {
            email,
            otp,
        });
    },

    postSendForgotEmail: (email) => {
        return postData(SEND_OTP_EMAIL_VERIFY_FORGOT_ENDPOINT, {
            email,
        });
    },
    postVerifyOTPForgot: (email, otp) => {
        return postData(VERIFY_OTP_FORGOT_PASSWORD_ENDPOINT, {
            email,
            otp,
        });
    },
    postResetPassword: (email, otp, newPassword) => {
        return postData(RESET_PASSWORD_ENDPOINT, {email, otp, new_password: newPassword});
    },

    postUpdateInfoProfile: (payload) => {
        return postData(GET_PROFILE_ENDPOINT, payload);
    },
    getInfoProfile: () => {
        return getData(GET_PROFILE_ENDPOINT);
    },

    postChangePassword: (password, newPassword) => {
        return postData(CHANGE_PASSWORD_ENDPOINT, {password, new_password: newPassword});
    },

    postCreatePassword: (new_password) => {
        return postData(CREATE_PASSWORD_ENDPOINT, {new_password});
    },

    postEditProfile: (data) => {
        return postData(CHANGE_PROFILE_ENDPOINT, {
            avatar: data.avatar,
            name: data.name,
            gender: Number(data.gender),
            address: data.address,
            province_id: data.province_id,
            district_id: data.district_id,
        });
    },

    postLogout: () => {
        return postData(LOGOUT_ENDPOINT);
    },
};

export default AuthServiceAPI;
