import {pathToRegexp} from 'path-to-regexp';
import HttpClient from '@azteam/http-client';

import ERROR_CODE from 'src/constants/errorCode';
import {
    GET_DETAIL_METADATA_ENDPOINT,
    GET_DETAIL_MOVIE_ENDPOINT,
    GET_DETAIL_STAR_ENDPOINT,
    GET_SITEMAP_ENDPOINT,
} from 'src/constants/apiEndpoints';

import {
    DETAIL_MOVIE_PATH,
    DETAIL_STAR_PATH,
    HOME_PATH,
    LIST_COUNTRY_MOVIE_PATH,
    LIST_GENRE_MOVIE_PATH,
    LIST_POPULAR_MOVIE_PATH,
    LIST_POPULAR_STAR_PATH,
    LIST_RELEASED_MOVIE_PATH,
    LIST_SEARCH_PATH,
} from 'src/constants/subPaths';

const detectRoute = (url) => {
    const params = [
        // {
        //     path: HOME_PATH.MATCH,
        //     url: `${GET_DETAIL_METADATA_ENDPOINT}/HOME`,
        // },
        /*
         * DETAIL
         * */
        // {
        //     path: DETAIL_MOVIE_PATH.MATCH,
        //     url: GET_DETAIL_MOVIE_ENDPOINT,
        //     paramName: 'slug',
        //     reducer: 'movie',
        // },
    ];

    for (const item of params) {
        const keys = [];
        const regexp = pathToRegexp(item.path, keys);
        const matches = regexp.exec(url);

        if (matches) {
            if (item.paramName) {
                for (let i = 1; i < matches.length; i += 1) {
                    const key = keys[i - 1];

                    if (key.name === item.paramName) {
                        item.url = `${item.url}/${matches[i]}`;
                        return item;
                    }
                }
            }
            return item;
        }
    }

    return {
        // url: `${GET_DETAIL_METADATA_ENDPOINT}/HOME`,
        disable: true,
    };
};

export const getInitReducers = async (req) => {
    const route = detectRoute(req.path);

    const result = {
        success: true,
        reducers: {
            metadata: {
                metadata_url: `https://${req.get('host')}${req.originalUrl}`,
                metadata_title: '',
                metadata_keywords: '',
                metadata_description: '',
                metadata_image_url: '',
                metadata_title_og: '',
                metadata_description_og: '',
            },
        },
    };

    try {
        const client = new HttpClient();
        let resAPI = {};
        if (typeof route.url !== 'undefined') {
            resAPI = await client.get(route.url);
        }

        if (typeof resAPI.success !== 'undefined') {
            if (resAPI.success) {
                if (resAPI.data.metadata_title) {
                    result.reducers.metadata = {
                        metadata_url: `https://${req.get('host')}${req.originalUrl}`,
                        metadata_disable: route.disable || resAPI.data.metadata_disable ? 1 : 0,
                        metadata_title: resAPI.data.metadata_title,
                        metadata_keywords: resAPI.data.metadata_keywords,
                        metadata_description: resAPI.data.metadata_description,
                        metadata_image_url: resAPI.data.metadata_image_url,
                        metadata_title_og: resAPI.data.metadata_title_og,
                        metadata_description_og: resAPI.data.metadata_description_og,
                    };
                }
                if (route.reducer) {
                    result.reducers[route.reducer] = {
                        item: resAPI.data,
                    };
                }
            } else if (resAPI.errors && resAPI.errors[0] && resAPI.errors[0].code === ERROR_CODE.NOT_EXISTS) {
                result.success = false;
            }
        }
    } catch (e) {
        console.error(e);
    }
    return result;
};

export const getSiteMap = async (domain, type = 'index', page = 1) => {
    const data = null;
    try {
        const client = new HttpClient();
        return await client.post(GET_SITEMAP_ENDPOINT, {
            domain,
            type,
            page,
        });
    } catch (e) {
        console.error(e);
    }
    return data;
};
