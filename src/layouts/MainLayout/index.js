import React from 'react';

import {LAYOUT} from 'src/constants/layouts';

import Header from 'src/partials/Header';
import PageRoute from 'src/routes/PageRoute';
import Footer from 'src/partials/Footer';
import TopBanner from 'src/partials/TopBanner';

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <TopBanner />
            <Header />
            <PageRoute layoutKey={LAYOUT.MAIN_LAYOUT} />
            <Footer />
        </div>
    );
};

export default MainLayout;
