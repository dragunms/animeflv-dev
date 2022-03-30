import './styles.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import {FaCaretRight, FaHome} from 'react-icons/all';

import {HOME_PATH} from 'src/constants/subPaths';

const Breadcrumb = ({className = ''}) => {
    return (
        <div className={`breadcrumb ${className}`}>
            <nav className='breadcrumb-nav'>
                <span className='home-icon'>
                    <FaHome />
                </span>
                <Link to={HOME_PATH.PATH} className='nav-item'>
                    Inicio
                </Link>
                <span className='caret-icon'>
                    <FaCaretRight />
                </span>
                <Link to={HOME_PATH.PATH} className='nav-item'>
                    KIMETSU NO YAIBA MOVIE: MUGEN RESSHA-HEN
                </Link>
                <span className='caret-icon'>
                    <FaCaretRight />
                </span>
                <Link to={HOME_PATH.PATH} className='nav-item'>
                    KIMETSU NO YAIBA MOVIE: MUGEN RESSHA-HEN 11
                </Link>
            </nav>
        </div>
    );
};

export default Breadcrumb;
