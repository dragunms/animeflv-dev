import './styles.scss';

import React, {useEffect, useRef, useState} from 'react';
import {FaUser} from 'react-icons/fa';

import LoginPopOverForm from './LoginPopOverForm';

const Login = () => {
    const [isShow, setIsShow] = useState(false);
    const ref = useRef();

    function handleShowPopOverOnClick() {
        setIsShow(true);
    }

    function handlePopOverOnClick() {
        setIsShow(!isShow);
    }
    function handleHidePopOverOnClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleHidePopOverOnClick);

        return () => {
            document.removeEventListener('mousedown', handleHidePopOverOnClick);
        };
    }, []);

    return (
        <div className='header-login-mobile'>
            <div className={`login-wrap ${isShow ? 'active' : ''}`} onClick={handlePopOverOnClick} ref={ref}>
                <FaUser className='login-icon' />
                <div className='label'>login</div>
            </div>
            {isShow && <LoginPopOverForm />}
        </div>
    );
};

export default Login;
