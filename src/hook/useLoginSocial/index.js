import './styles.scss';

import {FaGoogle} from 'react-icons/fa';

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GoogleLogin from 'react-google-login';

import LoginSocialButtonSkeleton from 'src/hook/useLoginSocial/SkeletonItem';

export const useLoginSocial = () => {
    const dispatch = useDispatch();
    const setting = useSelector((state) => state.setting);

    const [redirectUrl, setRedirectUrl] = useState(null);

    function handleGoogleLogin(res) {
        // dispatch(loginGoogle(res.tokenId));
    }

    useEffect(() => {
        let isMounted = false;
        if (!isMounted) {
            setRedirectUrl(window.location.origin + window.location.pathname);
        }
        return () => {
            isMounted = true;
            setRedirectUrl(null);
        };
    }, []);

    function getLoginGoogleButton(label, component = null) {
        const customComponent = component || (
            <>
                <div className='icon-wrapper'>
                    <span className='google-icon'>
                        <FaGoogle />
                    </span>
                </div>
                <span className='btn-label'>{label}</span>
            </>
        );

        if (!redirectUrl) return <LoginSocialButtonSkeleton />;
        return (
            <GoogleLogin
                clientId='144117418-b0c5ra3aid891a3qgf4tpsk2iv1ute5r.apps.googleusercontent.com'
                render={(renderProps) => (
                    <button
                        type='button'
                        className='btn-google'
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        {customComponent}
                    </button>
                )}
                onFailure={console.error}
                onSuccess={handleGoogleLogin}
                cookiePolicy='single_host_origin'
            />
        );
    }

    return {
        getLoginGoogleButton,
    };
};
