import path from 'path';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Route, StaticRouter} from 'react-router-dom';
import {ChunkExtractor, ChunkExtractorManager} from '@loadable/server';
import {Helmet} from 'react-helmet';
import UAParser from 'ua-parser-js';
import {Provider} from 'react-redux';
import {END} from 'redux-saga';

import App from 'src/App';

import {DEVICE} from 'src/constants/system';
import {ERROR_PATH} from 'src/constants/subPaths';

import {getInitReducers, getSiteMap} from './requestState';
import basePage from './basePage';
import refreshPage from './refreshPage';
import {configureStore} from 'src/redux/store';

const publicDir =
    process.env.NODE_ENV === 'development' ? process.env.RAZZLE_PUBLIC_DIR : path.join(__dirname, 'public');

const server = express();

server
    .disable('x-powered-by')
    .use(express.static(publicDir))

    .get(ERROR_PATH.PATH, async (req, res, next) => {
        res.status(404);
        return next();
    })
    .get('/sitemap.xml', async (req, res) => {
        const siteMaps = await getSiteMap(`https://${req.get('host')}`);
        if (siteMaps) {
            res.type('application/xml');
            return res.status(200).send(siteMaps);
        }
        return res.status(200).send(refreshPage());
    })
    .get('/sitemap-:key([a-z-]+)-:page([0-9]+).xml', async (req, res, next) => {
        const siteMaps = await getSiteMap(`https://${req.get('host')}`, req.params.key, req.params.page);
        if (siteMaps === null) {
            return res.status(200).send(refreshPage());
        }
        if (siteMaps) {
            res.type('application/xml');
            return res.status(200).send(siteMaps);
        }
        return next();
    })
    .get(ERROR_PATH.PATH, async (req, res, next) => {
        res.status(404);
        return next();
    })
    // eslint-disable-next-line consistent-return
    .get('/*', async (req, res) => {
        const initReducer = await getInitReducers(req, res);

        if (!initReducer.success) {
            return res.redirect(ERROR_PATH.PATH);
        }

        const store = configureStore({
            ...initReducer.reducers,
            init: {
                domain: req.hostname,
                device: {
                    type: DEVICE.DESKTOP,
                },
            },
        });

        const preloadState = store.getState();

        const userAgent = new UAParser(req.headers['user-agent']);
        const deviceType = userAgent.getDevice().type;
        const deviceOS = userAgent.getOS();

        if (deviceType === 'mobile') {
            preloadState.init.device = {
                type: DEVICE.MOBILE,
                os: deviceOS.name,
            };
        }

        const extractor = new ChunkExtractor({
            statsFile: path.resolve('build/loadable-stats.json'),
            entrypoints: ['client'],
        });

        const context = {};
        const markup = renderToString(
            <ChunkExtractorManager extractor={extractor}>
                <Provider store={store}>
                    <StaticRouter context={context} location={req.url}>
                        <Route component={App} />
                    </StaticRouter>
                </Provider>
            </ChunkExtractorManager>
        );
        store.dispatch(END);

        if (context.url) {
            res.redirect(context.url);
        } else {
            const scriptTags = extractor.getScriptTags();
            const linkTags = extractor.getLinkTags();
            const styleTags = extractor.getStyleTags();
            const helmet = Helmet.renderStatic();

            return res.send(basePage(helmet, markup, scriptTags, styleTags, linkTags, preloadState));
        }
    });

export default server;
