import React from 'react';

import {LAYOUT} from 'src/constants/layouts';

import PageRoute from 'src/routes/PageRoute';

const EmptyLayout = () => {
    return (
        <div>
            <PageRoute layoutKey={LAYOUT.EMPTY_LAYOUT} />
        </div>
    );
};

export default EmptyLayout;
