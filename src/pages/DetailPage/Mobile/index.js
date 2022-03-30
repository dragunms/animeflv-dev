import './styles.scss';

import React from 'react';

import DetailProfile from './DetailProfile';
import Synopsis from './Synopsis';
import DetailEpisodeList from './DetailEpisodeList';
import DetailTitle from './DetailTitle';
import DisqusComment from 'src/partials/DisqusComment';

const DetailPageMobile = () => {
    return (
        <div className='detail-page-mobile'>
            <DetailTitle />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <DetailProfile />
                    </div>
                    <div className='col-12'>
                        <Synopsis />
                        <DetailEpisodeList />
                        <DisqusComment />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailPageMobile;
