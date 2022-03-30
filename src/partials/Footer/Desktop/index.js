import './styles.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import {FaFacebookF, FaYoutube} from 'react-icons/fa';

import {ABOUT_US_PATH, TERM_OF_USE_PATH, POLICY_PATH} from 'src/constants/subPaths';

const FooterDesktop = () => {
    return (
        <div className='footer-desktop'>
            <div className='container-fluid footer-wrap'>
                <div className='container footer'>
                    <div className='footer-nav'>
                        <p className='nav-label'>
                            <span className='span'>Anime Online</span>- Ningún vídeo se encuentra alojado en nuestros
                            servidores.
                        </p>
                        <div className='footer-static-page'>
                            <ul className='static-page-list'>
                                <li className='item'>
                                    <Link to={TERM_OF_USE_PATH.PATH} className='static-page-item'>
                                        Términos y Condiciones
                                    </Link>
                                </li>
                                <li className='item'>
                                    <Link to={POLICY_PATH.PATH} className='static-page-item'>
                                        Política de Privacidad
                                    </Link>
                                </li>
                                <li className='item'>
                                    <Link to={ABOUT_US_PATH.PATH} className='static-page-item'>
                                        Sobre AnimeFLV
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-social-list'>
                        <ul className='social-list'>
                            <li>
                                <a
                                    href='https://www.facebook.com/armyanime/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='social-item'
                                >
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://www.youtube.com/c/kudasai'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='social-item'
                                >
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterDesktop;
