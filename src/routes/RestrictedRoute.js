import loadable from '@loadable/component';

import React, {useEffect, useMemo, useState} from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';

import {HOME_PATH, LOGIN_PATH} from 'src/constants/subPaths';

const RestrictedRoute = ({location, ...props}) => {
    const {isLogin, auth, noAuth} = props;
    const [redirectHome, setRedirectHome] = useState(null);
    const [redirectLogin, setRedirectLogin] = useState(null);

    let Splash = loadable(() => import(/* webpackChunkName: "splash" */ 'src/components/Splash'));

    useEffect(() => {
        let unmounted = true;
        if (unmounted) {
            if (auth && isLogin === false) {
                setRedirectLogin(true);
            } else {
                setRedirectLogin(false);
            }
            if (noAuth && isLogin) {
                setRedirectHome(true);
            } else {
                setRedirectHome(false);
            }
        }
        return () => {
            unmounted = false;
            Splash = null;
            setRedirectHome(false);
            setRedirectLogin(false);
        };
    }, [isLogin]);

    return useMemo(() => {
        if (redirectLogin) {
            return (
                <Redirect
                    to={{
                        pathname: LOGIN_PATH.PATH,
                        state: {from: location},
                    }}
                />
            );
        }
        if (redirectHome) {
            return (
                <Redirect
                    to={{
                        pathname: HOME_PATH.PATH,
                        state: {from: location},
                    }}
                />
            );
        }
        if (redirectHome !== null && redirectLogin !== null) {
            return <Route {...props} />;
        }
        return <Route {...props} exact component={(prop) => <Splash {...prop} />} />;
    }, [redirectLogin, redirectHome, location]);
};

export default withRouter(RestrictedRoute);
