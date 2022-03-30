export const HOME_PATH = {
    PATH: '/',
    MATCH: '/',
};
export const NOT_FOUND_PATH = {
    PATH: '/*',
    MATCH: '/*',
};
export const ERROR_PATH = {
    PATH: '/404',
    MATCH: '/404',
};

export const LOGIN_PATH = {
    PATH: '/login',
    MATCH: '/login',
};
export const SIGN_UP_PATH = {
    PATH: '/signup',
    MATCH: '/signup',
};
export const FORGOT_PASSWORD_PATH = {
    PATH: '/forgot-password',
    MATCH: '/forgot-password',
};
export const CHANGE_PASSWORD_PATH = {
    PATH: '/change-password',
    MATCH: '/change-password',
};
export const FILTER_PATH = {
    PATH: '/browse',
    MATCH: '/browse',
};

export const DETAIL_PATH = {
    PATH: '/anime',
    MATCH: '/anime/:slug([A-Za-z0-9_-]+)',
};

export const DETAIL_WATCH_PATH = {
    PATH: '/ver',
    MATCH: '/ver/:slug([A-Za-z0-9_-]+)',
};
export const PROFILE_PATH = {
    PATH: '/perfil',
    MATCH: '/perfil/:slug([A-Za-z0-9_-]+)',
};

export const PROFILE_FILTER_PATH = {
    PATH: '/perfil',
    MATCH: '/perfil/:slug([A-Za-z0-9_-]+)/:slug([A-Za-z0-9_-]+)',
};

export const ABOUT_US_PATH = {
    PATH: '/sobre-animeflv',
    MATCH: '/sobre-animeflv',
};

export const TERM_OF_USE_PATH = {
    PATH: '/condiciones-de-uso',
    MATCH: '/condiciones-de-uso',
};

export const POLICY_PATH = {
    PATH: '/politica-de-privacidad',
    MATCH: '/politica-de-privacidad',
};
