import './styles.scss';

import React, {useState} from 'react';

import ViewItem from './ViewItem';
import Breadcrumb from 'src/partials/Breadcrumb';
import DetailWatchVerticalList from 'src/partials/DetailVerticalList';
import DisqusComment from 'src/partials/DisqusComment';

const DetailWatchPageDesktop = () => {
    const [layout, setLayout] = useState(false);

    function changeLayout() {
        setLayout(!layout);
    }

    return (
        <div className='detail-watch-page-desktop'>
            <div className={`detail-watch-page-wrapper ${layout ? 'fullscreen' : ''}`}>
                <div className='container'>
                    <div className='row g-4'>
                        <div className={`${layout ? 'col-12' : 'col-9'} transition`}>
                            <Breadcrumb className={layout ? 'fullscreen' : ''} />
                            <ViewItem
                                className={layout ? 'fullscreen' : ''}
                                layout={layout}
                                changeLayout={changeLayout}
                            />
                        </div>
                        {!layout && (
                            <div className='col-3'>
                                <DetailWatchVerticalList className='relative' />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row g-4'>
                    <div className='col-9'>
                        <DisqusComment />
                    </div>
                    {layout && (
                        <div className='col-3'>
                            <DetailWatchVerticalList className='relative' />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailWatchPageDesktop;
