import './styles.scss';

import React from 'react';

import Logo from '../Logo';
import Drawer from './Drawer';

const HeaderMobile = () => {
    return (
        <div className='header-mobile'>
            <div className='container-fluid header-wrap px-3'>
                <div className='header'>
                    <Logo />
                    <Drawer />
                </div>
            </div>
        </div>
    );
};

export default HeaderMobile;
