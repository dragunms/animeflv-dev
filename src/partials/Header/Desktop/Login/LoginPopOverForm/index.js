import './styles.scss';

import React from 'react';
import Joi from 'joi';
import {Link} from 'react-router-dom';
import {useLoginSocial} from 'src/hook/useLoginSocial';

import AvForm from 'src/components/Form/AvForm';
import AvTextInput from 'src/components/Form/AvTextInput';

import {HOME_PATH} from 'src/constants/subPaths';

const LoginPopOverForm = () => {
    const {getLoginGoogleButton} = useLoginSocial();

    function handleOnSubmit() {
        console.log('submit');
    }

    return (
        <div className='login-popover-form'>
            <h2 className='title'>INICIAR SESION</h2>
            <AvForm
                onSubmit={handleOnSubmit}
                joiValidate={{
                    username: Joi.string().trim().required().max(255).messages({
                        'string.empty': 'The email field is required',
                        'string.max': 'Email must not exceed 255 characters',
                    }),
                    password: Joi.string().trim().required().min(6).max(32).messages({
                        'string.empty': 'The password field is required',
                        'string.min': 'The password must have more than 6 characters',
                        'string.max': 'The password must have less than 32 characters',
                    }),
                }}
                className='login-form'
            >
                <AvTextInput name='username' placeholder='Email' />
                <AvTextInput name='password' placeholder='Contraseña' />
                <div className='btn-wrap'>
                    <button className='submit-btn' type='submit' id='submit-form'>
                        INICIAR SESION
                    </button>
                </div>
                <div className='social-login'>{getLoginGoogleButton('INICIAR SESION CON GOOGLE')}</div>
                <div className='link-wrap'>
                    <Link to={HOME_PATH.PATH}>Registrate</Link>
                    <Link to={HOME_PATH.PATH} className='link'>
                        ¿Olvidaste tu contraseña?
                    </Link>
                </div>
            </AvForm>
        </div>
    );
};
export default LoginPopOverForm;
