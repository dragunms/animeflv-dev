import './styles.scss';

import React from 'react';

import DetailProfile from './DetailProfile';
import Synopsis from './Synopsis';
import DetailEpisodeList from './DetailEpisodeList';
import DetailTitle from './DetailTitle';
import DisqusComment from 'src/partials/DisqusComment';

const DetailPageDesktop = () => {
    return (
        <div className='detail-page-desktop'>
            <DetailTitle />
            <div className='container'>
                <div className='row'>
                    <div className='col-3 sidebar'>
                        <DetailProfile />
                    </div>
                    <div className='col-9 main'>
                        <Synopsis />
                        <DetailEpisodeList />
                        <DisqusComment />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailPageDesktop;
