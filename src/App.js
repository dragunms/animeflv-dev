import 'react-toastify/dist/ReactToastify.css';
import 'src/theme/reboot.scss';
import 'src/theme/index.scss';
import 'src/theme/base.scss';

import _ from 'lodash';
import React, {useEffect, useMemo, useRef} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ToastContainer, Flip} from 'react-toastify';

import ErrorBoundary from 'src/components/ErrorBoundary';
import MetaTag from 'src/components/MetaTag';
import Splash from 'src/components/Splash';

import {DEVICE, DEVICE_WIDTH} from 'src/constants/system';

import {getLayoutRoutes} from 'src/routes/config';

import {detectDevice, detectServerRendered} from 'src/redux/init/action';

const App = () => {
    const dispatch = useDispatch();

    const debounced = useRef(
        _.debounce(() => {
            let device = DEVICE.DESKTOP;

            if (window.innerWidth < DEVICE_WIDTH.MOBILE) {
                device = DEVICE.MOBILE;
            }
            if (window.innerWidth >= DEVICE_WIDTH.MOBILE && window.innerWidth <= DEVICE_WIDTH.TABLET) {
                device = DEVICE.TABLET;
            }
            if (window.innerWidth >= DEVICE_WIDTH.TABLET && window.innerWidth <= DEVICE_WIDTH.LARGE_TABLET) {
                device = DEVICE.TABLET;
            }
            if (window.innerWidth > DEVICE_WIDTH.LARGE_TABLET) {
                device = DEVICE.DESKTOP;
            }
            dispatch(
                detectDevice({
                    type: device,
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            );
        }, 500)
    );

    useEffect(() => {
        const handleWindowResize = (event) => {
            if (event && !event.isTrusted) {
                return;
            }
            debounced.current();
        };

        dispatch(detectServerRendered());

        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        return () => {
            window.removeEventListener('resize', handleWindowResize);
            debounced.current.cancel();
        };
    }, []);
    return useMemo(() => {
        return (
            <ErrorBoundary>
                <Splash />
                <Switch>
                    {getLayoutRoutes().map((props, index) => {
                        return <Route {...props} key={index.toString()} />;
                    })}
                </Switch>
                <MetaTag />
                <ToastContainer
                    transition={Flip}
                    position='top-center'
                    autoClose={2000}
                    limit={2}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </ErrorBoundary>
        );
    }, []);
};

export default App;
