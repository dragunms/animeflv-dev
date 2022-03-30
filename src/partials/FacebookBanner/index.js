import './styles.scss';

import banner from 'assets/images/utils/fb-flv.png';

import React from 'react';

import LazyImage from 'src/components/LazyImage';

const FacebookBanner = () => {
    return (
        <div className='facebook-banner'>
            <LazyImage src={banner} width={500} className='facebook-banner-image' />
        </div>
    );
};
export default FacebookBanner;
