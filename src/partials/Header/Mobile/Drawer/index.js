import './styles.scss';

import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

import SearchInput from '../SearchInput';
import Login from '../Login';
import Menu from '../Menu';
import SocialList from '../SocialList';

const Drawer = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    function handleShowDrawerOnClick() {
        setShowDrawer(true);
    }

    function handleHideDrawerOnClick() {
        setShowDrawer(false);
    }

    return (
        <div className='header-drawer'>
            {showDrawer && <div className='drawer-overlay' onClick={handleHideDrawerOnClick} />}
            <nav className={`drawer-wrap ${showDrawer && 'shown'}`}>
                <div className='drawer-item'>
                    <SearchInput />
                </div>
                <div className='drawer-item'>
                    <Login />
                </div>
                <div className='drawer-item'>
                    <Menu />
                </div>
                <div className='drawer-item'>
                    <SocialList />
                </div>
            </nav>
            <div className='menu' onClick={handleShowDrawerOnClick}>
                <span className='label'>Menu</span>
                {showDrawer ? (
                    <div className='menu-icon-wrap close-icon'>
                        <FaTimes />
                    </div>
                ) : (
                    <div className='menu-icon-wrap bars-icon'>
                        <FaBars />
                    </div>
                )}
            </div>
        </div>
    );
};
export default Drawer;
