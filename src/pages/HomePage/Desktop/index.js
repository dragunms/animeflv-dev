import './styles.scss';

import React from 'react';

import FacebookBanner from 'src/partials/FacebookBanner';
import VerticalList from 'src/partials/VerticalList';
import MainHorizontalList from 'src/partials/MainHorizontalList';
import HorizontalList from 'src/partials/HorizontalList';

const HomePageDesktop = () => {
    return (
        <div className='homepage-desktop'>
            <div className='container'>
                <div className='row homepage-wrap'>
                    <div className='col-3 left-sidebar'>
                        <FacebookBanner />
                        <VerticalList />
                    </div>
                    <div className='col-9 main-homepage-content'>
                        <MainHorizontalList />
                        <HorizontalList title='Últimos animes agregados' row={4} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageDesktop;
