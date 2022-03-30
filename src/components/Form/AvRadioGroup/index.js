import './styles.scss';

import _ from 'lodash';
import React, {useEffect, useState} from 'react';

const AvRadioGroup = ({
    register,
    className = '',
    error,
    defaultValue,
    onChange = null,
    label = null,
    name,
    data = [],
    labelField = 'label',
    valueField = 'value',
    position = 'horizontal', // vertical or horizontal
}) => {
    const [value, setValue] = useState();

    function handleOnChange(e) {
        setValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    }

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    return (
        <div className={`av-radio-group ${position} ${className}`}>
            <span className='av-label'>{label}</span>
            {_.map(data, (item, index) => {
                return (
                    <div className={`item ${position}`} key={index.toString()}>
                        <input
                            className='input'
                            name={name}
                            type='radio'
                            value={item[valueField]}
                            ref={register}
                            id={`${name}${index}`}
                            onChange={handleOnChange}
                            checked={value?.toString() === item[valueField]?.toString()}
                        />
                        <label htmlFor={`${name}${index}`} className='value-label'>
                            {item[labelField]}
                        </label>
                    </div>
                );
            })}
            <span className='error'>{error}</span>
        </div>
    );
};

AvRadioGroup.displayName = 'AvRadioGroup';
export default AvRadioGroup;
