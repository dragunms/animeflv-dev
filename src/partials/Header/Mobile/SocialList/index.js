import './styles.scss';

import React from 'react';
import {FaFacebookF} from 'react-icons/fa';

const SocialList = () => {
    return (
        <div className='header-social-list-mobile'>
            <a href='https://www.facebook.com/armyanime/' target='_blank' rel='noreferrer' className='social'>
                <FaFacebookF className='social-icon' />
            </a>
        </div>
    );
};

export default SocialList;
