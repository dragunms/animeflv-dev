import 'partials/Header/Logo/styles.scss';

import logo from 'assets/images/logo/logo.png';

import React from 'react';
import {Link} from 'react-router-dom';

import LazyImage from 'src/components/LazyImage';

import {HOME_PATH} from 'src/constants/subPaths';

const Logo = () => {
    return (
        <div className='header-logo'>
            <Link to={HOME_PATH.PATH}>
                <LazyImage src={logo} alt='logo' className='logo-image' />
            </Link>
        </div>
    );
};

export default Logo;
