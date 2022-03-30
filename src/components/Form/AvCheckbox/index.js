import './styles.scss';

import React from 'react';

const AvCheckbox = ({
    register,
    error,
    onChange,
    label,
    name,
    className = '',
    placeholder = '',
    inputProps = {},
    maxLength = null,
    defaultValue,
}) => {
    return (
        <div className={`av-checkbox ${className}`}>
            <input
                className='av-input'
                id={name}
                type='checkbox'
                name={name}
                ref={register}
                readOnly={false}
                onChange={onChange}
                placeholder={placeholder}
                defaultValue={defaultValue}
                maxLength={maxLength}
                {...inputProps}
            />
            <label className='av-label' htmlFor={name}>
                {label}
            </label>
            <span className='error'>{error}</span>
        </div>
    );
};

AvCheckbox.displayName = 'AvCheckbox';

export default AvCheckbox;
