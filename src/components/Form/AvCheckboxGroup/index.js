import './styles.scss';
import React from 'react';
import _ from 'lodash';

/*
 *     position = 'vertical'/"horizontal",
 * */
const AvCheckboxGroup = ({
    title = '',
    label = null,
    data = [],
    name,
    className = '',
    titleClassName = '',
    labelField = 'label',
    valueField = 'value',
    register,
    error,
    onChange = null,
    defaultValue,
    position = 'horizontal',
}) => {
    function handleSelectValueOnChange(e) {
        if (onChange) {
            onChange(e.target.value);
        }
    }

    return (
        <>
            {title && <div className={`checkbox-group-title ${titleClassName}`}>{title}</div>}
            <div className={`av-checkbox-group ${position} ${className}`}>
                <span className='av-label'>{label}</span>
                {_.map(data, (item, index) => {
                    let checked = null;
                    if (defaultValue && defaultValue.length) {
                        checked = defaultValue.some((value) => item.id === value);
                    }
                    return (
                        <div className={`item ${position}`} key={index.toString()}>
                            <input
                                className='input'
                                name={name}
                                type='checkbox'
                                value={item[valueField]}
                                ref={register}
                                id={`${name}${index}`}
                                onChange={handleSelectValueOnChange}
                                defaultChecked={checked}
                            />
                            <label htmlFor={`${name}${index}`} className='value-label'>
                                {item[labelField]}
                            </label>
                        </div>
                    );
                })}
                <span className='error'>{error}</span>
            </div>
        </>
    );
};
AvCheckboxGroup.displayName = 'AvCheckboxGroup';

export default AvCheckboxGroup;
