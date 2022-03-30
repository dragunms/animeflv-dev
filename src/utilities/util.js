import moment from 'moment';
import querystring from 'querystring';
import UAParser from 'ua-parser-js';

import {OS} from 'src/constants/system';

export function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function convertRelativeTime(time) {
    if (time) {
        moment.locale('en');
        // eslint-disable-next-line no-param-reassign
        time = Number(time);
        const currentTime = moment().unix();
        const timeCheck = currentTime - time;

        if (timeCheck > 604800) {
            return moment.unix(time).format('DD/MM/YYYY');
        }
        return moment.unix(time).fromNow();
    }
    return '';
}

export function convertTime(time, format) {
    return time ? moment.unix(time).format(format || 'YYYY-MM-DD') : '';
}
export function convertAge(time) {
    return time ? moment().diff(convertTime(time), 'years') : '';
}

export function isToday(time) {
    // eslint-disable-next-line no-param-reassign
    time = Number(time);
    const currentTime = moment().unix();
    const timeCheck = currentTime - time;

    return Math.floor(timeCheck / 3600) <= 24;
}

export function formatUrlAsset(url) {
    if (!url) {
        return undefined;
    }
    if (!url.startsWith('http')) {
        // eslint-disable-next-line no-param-reassign
        url = `${process.env.RAZZLE_ASSET_URL}/${url}`;
    }
    return url;
}

export function formatUrlImage(url, width, height, type = 'webp') {
    const userAgent = new UAParser();
    const os = userAgent.getOS();

    if (`${url}`.includes('?')) {
        return url;
    }
    // eslint-disable-next-line no-param-reassign
    url = formatUrlAsset(url);
    if (url) {
        const imageHeight = height ? `&h=${height}` : '';
        const imageWidth = width ? `&w=${width}` : '';

        if (type === 'webp' && OS.IOS === os.name) return `${url}?t=jpg${imageWidth}${imageHeight}`;
        return `${url}?t=${type}${imageWidth}${imageHeight}`;
    }
    return undefined;
}

export function setCacheLocalStorage(key, value) {
    if (typeof value !== 'object' || typeof value !== 'boolean') {
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
}

export function getCacheLocalStorage(key) {
    const value = localStorage.getItem(key);
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
}

export function setActiveItemByParams(location, key, value) {
    const queryParams = querystring.decode(location.search.replace('?', ''));

    if (!queryParams[key] && !value) return true;
    if (queryParams[key] === value) return true;
    return null;
}
