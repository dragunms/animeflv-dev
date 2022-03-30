import React from 'react';

const AvHiddenInput = ({register, onChange, name, value = null, inputProps = {}}) => {
    if (value) {
        return (
            <div className='av-hidden'>
                <input
                    id={name}
                    type='hidden'
                    name={name}
                    ref={register}
                    onChange={onChange}
                    value={value}
                    {...inputProps}
                />
            </div>
        );
    }
    return (
        <div className='av-hidden'>
            <input id={name} type='hidden' name={name} ref={register} onChange={onChange} {...inputProps} />
        </div>
    );
};

AvHiddenInput.displayName = 'AvHiddenInput';

export default AvHiddenInput;
