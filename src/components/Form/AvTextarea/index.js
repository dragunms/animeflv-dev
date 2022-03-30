import './styles.scss';

import React from 'react';

const AvTextarea = ({
    register,
    rows = 4,
    cols = 50,
    error,
    onChange,
    label,
    name,
    className = '',
    placeholder = '',
    required = false,
    maxLength = null,
    defaultValue,
    inputProps = {},
}) => {
    return (
        <div className={`av-textarea ${className}`}>
            <label className='av-label' htmlFor={name}>
                {required && <span className='required'>*</span>}
                {label}
            </label>
            <textarea
                className='av-input'
                rows={rows}
                cols={cols}
                id={name}
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

AvTextarea.displayName = 'AvTextarea';

export default AvTextarea;
