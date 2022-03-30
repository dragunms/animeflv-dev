import './styles.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import {HOME_PATH} from 'src/constants/subPaths';

const Menu = () => {
    return (
        <div className='header-menu-mobile'>
            <ul className='menu-list'>
                <li className='menu-item'>
                    <Link to={HOME_PATH.PATH} className='link'>
                        Inicio
                    </Link>
                </li>
                <li className='menu-item'>
                    <Link to={HOME_PATH.PATH} className='link'>
                        Directorio Anime
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
