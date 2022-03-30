import './styles.scss';

import React from 'react';

const AvTextInput = ({
    register,
    error,
    onChange,
    label,
    name,
    className = '',
    placeholder = '',
    type = 'text',
    required = false,
    maxLength = null,
    defaultValue,
    inputProps = {},
}) => {
    return (
        <div className={`av-text ${className}`}>
            <label className='av-label' htmlFor={name}>
                {required && <span className='required'>*</span>}
                {label}
            </label>
            <input
                className='av-input'
                id={name}
                type={type}
                name={name}
                ref={register}
                readOnly={false}
                onChange={onChange}
                placeholder={placeholder}
                defaultValue={defaultValue}
                maxLength={maxLength}
                {...inputProps}
            />
            <span className='error'>{error}</span>
        </div>
    );
};

AvTextInput.displayName = 'AvTextInput';

export default AvTextInput;
