import './styles.scss';

import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import {HOME_PATH, FILTER_PATH} from 'src/constants/subPaths';

const Menu = () => {
    return (
        <div className='header-menu-desktop'>
            <ul className='menu-list'>
                <li className='menu-item'>
                    <Link to={HOME_PATH.PATH} className='link'>
                        Inicio
                    </Link>
                </li>
                <li className='menu-item'>
                    <NavLink to={FILTER_PATH.PATH} exact className='link'>
                        Directorio Anime
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
