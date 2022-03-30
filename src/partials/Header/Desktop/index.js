import './styles.scss';

import React from 'react';

import Menu from './Menu';
import Login from './Login';
import SocialList from './SocialList';
import SearchInput from './SearchInput';
import Logo from '../Logo';

const HeaderDesktop = () => {
    return (
        <div className='header-desktop'>
            <div className='container-fluid header-wrap'>
                <div className='container header'>
                    <Logo />
                    <Menu />
                    <SearchInput />
                    <Login />
                    <SocialList />
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktop;
