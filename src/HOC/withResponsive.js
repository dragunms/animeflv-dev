import React from 'react';
import {useSelector} from 'react-redux';
import loadable from '@loadable/component';

import {DEVICE} from 'src/constants/system';

function withResponsive(desktopComponent, tabletComponent, mobileComponent) {
    return (props) => {
        const device = useSelector((state) => state.init.device.type);

        let Component = null;
        switch (device) {
            case DEVICE.DESKTOP:
                Component = loadable(desktopComponent);
                break;
            case DEVICE.TABLET:
                Component = loadable(tabletComponent);
                break;
            case DEVICE.MOBILE:
                Component = loadable(mobileComponent);
                break;
            default:
                Component = null;
        }

        return <Component {...props} />;
    };
}

export default withResponsive;
