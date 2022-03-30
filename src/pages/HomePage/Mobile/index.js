import './styles.scss';

import React from 'react';

import FacebookBanner from 'src/partials/FacebookBanner';
import VerticalList from 'src/partials/VerticalList';
import MainHorizontalList from 'src/partials/MainHorizontalList';
import HorizontalList from 'src/partials/HorizontalList';

const HomePageMobile = () => {
    return (
        <div className='homepage-mobile'>
            <div className='container-fluid'>
                <div className='row homepage-wrap'>
                    <div className='col-12'>
                        <FacebookBanner />
                        <VerticalList />
                        <MainHorizontalList />
                        <HorizontalList title='Últimos animes agregados' row={1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageMobile;
