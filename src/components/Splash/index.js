import './styles.scss';

import React from 'react';
import {useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';

const Splash = () => {
    const initSuccess = useSelector((state) => state.init.success);
    const isClient = useSelector((state) => state.init.isClient);
    const loading = useSelector((state) => state.process.loading);

    if (!loading && initSuccess) return null;
    if (!isClient) return null;

    return (
        <div className='lds-ring'>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
export default withRouter(Splash);
