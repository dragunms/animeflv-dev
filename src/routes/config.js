import loadable from '@loadable/component';
import _ from 'lodash';

import {
    HOME_PATH,
    ERROR_PATH,
    NOT_FOUND_PATH,
    FILTER_PATH,
    DETAIL_PATH,
    DETAIL_WATCH_PATH,
    PROFILE_PATH,
    PROFILE_FILTER_PATH,
    ABOUT_US_PATH,
    TERM_OF_USE_PATH,
    POLICY_PATH,
} from 'src/constants/subPaths';

import {LAYOUT} from 'src/constants/layouts';

/*
 * Page props
 *  - auth: true // if exists page require login to access
 *  - noAuth: true // if exists page require no login to access
 */

const config = [
    /* *
     * Main Layout
     * */
    {
        // eslint-disable-next-line import/no-cycle
        layout: loadable(() => import('src/layouts/MainLayout')),
        layoutKey: LAYOUT.MAIN_LAYOUT,
        pages: [
            {
                path: HOME_PATH.MATCH,
                page: loadable(() => import('src/pages/HomePage')),
            },
            {
                path: FILTER_PATH.MATCH,
                page: loadable(() => import('src/pages/FilterPage')),
            },
            {
                path: DETAIL_PATH.MATCH,
                page: loadable(() => import('src/pages/DetailPage')),
            },
            {
                path: DETAIL_WATCH_PATH.MATCH,
                page: loadable(() => import('src/pages/DetailWatchPage')),
            },
            {
                path: PROFILE_FILTER_PATH.MATCH,
                page: loadable(() => import('src/pages/ProfileFilterPage')),
            },
            {
                path: PROFILE_PATH.MATCH,
                page: loadable(() => import('src/pages/ProfilePage')),
            },
            {
                path: ABOUT_US_PATH.MATCH,
                page: loadable(() => import('src/pages/AboutUsPage')),
            },
            {
                path: TERM_OF_USE_PATH.MATCH,
                page: loadable(() => import('src/pages/TermOfUsePage')),
            },
            {
                path: POLICY_PATH.MATCH,
                page: loadable(() => import('src/pages/PolicyPage')),
            },
        ],
    },

    /* *
     * Empty Layout
     * */

    {
        // eslint-disable-next-line import/no-cycle
        layout: loadable(() => import('src/layouts/EmptyLayout')),
        layoutKey: LAYOUT.EMPTY_LAYOUT,
        pages: [
            {
                path: NOT_FOUND_PATH.MATCH,
                page: loadable(() => import('src/pages/NotFoundPage')),
            },
            {
                path: ERROR_PATH.MATCH,
                page: loadable(() => import('src/pages/NotFoundPage')),
            },
        ],
    },
];

export const getPageRoutes = (layoutKey) => {
    const pageRoutes = [];

    config.map((route) => {
        if (route.layoutKey === layoutKey) {
            route.pages.map((item) => {
                pageRoutes.push(item);
                return true;
            });
        }
        return true;
    });
    return pageRoutes;
};

export const getLayoutRoutes = () =>
    config.map((route, key) => {
        const paths = route.pages.map((item) => {
            return _.isUndefined(item.path) ? '/.*' : item.path;
        });

        return {
            key,
            path: paths.length === 0 ? '*' : paths,
            exact: true,
            component: route.layout,
        };
    });
