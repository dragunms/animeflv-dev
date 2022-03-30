import React from 'react';
import {Router} from 'react-router-dom';

import App from 'src/App';

import history from 'src/history';

const ClientApp = () => {
    return (
        <Router history={history}>
            <App />
        </Router>
    );
};

export default ClientApp;
