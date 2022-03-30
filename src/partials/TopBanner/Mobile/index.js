import './styles.scss';

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FaFacebookF, FaInstagram, FaTimes, FaTwitter} from 'react-icons/fa';

import {closeBanner} from 'src/redux/banner/action';

const TopBannerMobile = () => {
    const dispatch = useDispatch();
    const banner = useSelector((state) => state.banner);

    const {isShowBanner} = banner;

    function hideBannerOnClick() {
        dispatch(closeBanner());
    }

    if (!isShowBanner) return null;

    return (
        <div className='top-banner-mobile'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='top-banner-wrapper'>
                            <div className='text-block'>
                                <div className='title'>
                                    <span className='text'>¿Ya sigues nuestras Redes Sociales?</span>
                                    <div className='hide-button' onClick={hideBannerOnClick}>
                                        <span className='times-icon'>
                                            <FaTimes />
                                        </span>
                                    </div>
                                </div>
                                <div className='sub-title'>
                                    Si quieres mantenerte informado de nuestros proximos proyectos, no olvides visitar
                                    nuestras redes sociales
                                </div>
                            </div>
                            <div className='social-list-block'>
                                <a
                                    href='https://www.facebook.com/armyanime/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='social-block-item'
                                >
                                    <div className='icon facebook-icon'>
                                        <FaFacebookF />
                                    </div>
                                    <div className='social-block-text facebook'>@Anime Army</div>
                                </a>
                                <a
                                    href='https://twitter.com/ArmyAnime_'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='social-block-item'
                                >
                                    <div className='icon twitter-icon'>
                                        <FaTwitter />
                                    </div>
                                    <div className='social-block-text twitter'>@Anime Army</div>
                                </a>
                                <a
                                    href='https://www.instagram.com/animearmy.jp/'
                                    target='_blank'
                                    rel='noreferrer'
                                    className='social-block-item'
                                >
                                    <div className='icon instagram-icon'>
                                        <FaInstagram />
                                    </div>
                                    <div className='social-block-text instagram'>@Anime Army</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBannerMobile;
