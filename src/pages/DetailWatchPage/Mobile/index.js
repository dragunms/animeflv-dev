import './styles.scss';

import React, {useState} from 'react';

import ViewItem from './ViewItem';
import Breadcrumb from 'src/partials/Breadcrumb';
import DetailWatchVerticalList from 'src/partials/DetailVerticalList';
import DisqusComment from 'src/partials/DisqusComment';

const DetailWatchPageMobile = () => {
    const [layout, setLayout] = useState(false);

    function changeLayout() {
        setLayout(!layout);
    }

    return (
        <div className='detail-watch-page-mobile'>
            <div className='container-fluid'>
                <div className='row g-4'>
                    <div className='col-12 transition'>
                        <Breadcrumb />
                        <ViewItem changeLayout={changeLayout} />
                        <DisqusComment />
                        <DetailWatchVerticalList className='relative' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailWatchPageMobile;
