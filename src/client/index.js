import React from 'react';
import {hydrate} from 'react-dom';
import {loadableReady} from '@loadable/component';
import {Provider} from 'react-redux';

import {configureStore} from 'src/redux/store';
import ClientApp from './ClientApp';

const root = document.getElementById('root');

function render(Root) {
    // eslint-disable-next-line no-underscore-dangle
    const store = configureStore(window.__PRELOADED_STATE__);

    loadableReady().then(() => {
        hydrate(
            <Provider store={store}>
                <Root />
            </Provider>,
            root
        );
    });
}

render(ClientApp);

if (module.hot) {
    module.hot.accept('./ClientApp', () => {
        // eslint-disable-next-line global-require
        const NewApp = require('./ClientApp').default;
        render(NewApp);
    });
}
