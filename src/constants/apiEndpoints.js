/**
 * METADATA
 */
export const GET_DETAIL_METADATA_ENDPOINT = `${process.env.RAZZLE_API_URL}/metadata/detail`;

/**
 * INDEX
 */
export const GET_SITEMAP_ENDPOINT = `${process.env.RAZZLE_API_URL}/site_maps`;

/**
 * INDEX
 */
export const GET_SETTING_ENDPOINT = `${process.env.RAZZLE_API_URL}/settings/init`;

/**
 * AUTH
 */
export const REGISTER_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/register`;
export const LOGIN_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/login`;
export const LOGIN_WITH_EMAIL_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/login_email`;
export const LOGIN_WITH_FACEBOOK_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/login_facebook`;
export const LOGIN_WITH_GOOGLE_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/login_google`;
export const LOGIN_WITH_APPLE_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/login_apple`;
export const LOGIN_BY_PHONE_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/login_phone`;

export const SEND_OTP_EMAIL_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/send_otp_email`;
export const SEND_OTP_PHONE_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/send_otp_phone`;
export const SEND_OTP_EMAIL_VERIFY_FORGOT_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/send_otp_forgot_email`;

export const VERIFY_PHONE_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/login_phone`;
export const VERIFY_EMAIL_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/verify_email`;
export const VERIFY_OTP_FORGOT_PASSWORD_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/verify_email`;

export const RESET_PASSWORD_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/reset_password`;

export const LOGOUT_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/auth/logout`;

/**
 * PROFILE (required login)
 */
export const GET_PROFILE_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/profile`;
export const CHANGE_PASSWORD_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/profile/password`;
export const CHANGE_PROFILE_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/profile`;
export const CREATE_PASSWORD_ENDPOINT = `${process.env.RAZZLE_ACCOUNT_URL}/profile/create_password`;

/**
 * MOVIE
 */
export const GET_FILTER_MOVIE_ENDPOINT = `${process.env.RAZZLE_API_URL}/movies/filter`;
export const GET_RELATED_STAR_ENDPOINT = `${process.env.RAZZLE_API_URL}/movies/star`;
export const GET_DETAIL_MOVIE_ENDPOINT = `${process.env.RAZZLE_API_URL}/movies/detail`;
