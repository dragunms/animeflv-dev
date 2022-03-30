import './styles.scss';

import React, {useEffect, useRef, useState} from 'react';
import _ from 'lodash';
import {FaAngleDown} from 'react-icons/fa';

const AvMultiSelectCheckboxGroup = ({
    label = null,
    data = [],
    name,
    className = '',
    labelField = 'label',
    valueField = 'value',
    register,
    error,
    onChange = null,
    defaultValue,
    value,
    rows = 4,
    position = 'horizontal',
}) => {
    const [isShown, setIsShown] = useState(false);
    const ref = useRef();

    const containerWidth = 100 * rows;
    const itemWidth = `${100 / rows}%`;

    function handleSelectValueOnChange(e) {
        if (onChange) {
            onChange(e);
        }
    }

    function handleShowMultiSelectOnClick() {
        setIsShown(true);
    }

    function handleHideMultiSelectOnClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShown(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleHideMultiSelectOnClick);

        return () => {
            document.removeEventListener('mousedown', handleHideMultiSelectOnClick);
        };
    }, []);

    return (
        <>
            <div className={`av-multiselect-checkbox-group ${position} ${className}`} ref={ref}>
                <div className='box' onClick={handleShowMultiSelectOnClick}>
                    <span className='av-label'>{label}:</span>
                    <span className='av-value'>{value || 'Todos'}</span>
                    <span className='caret'>
                        <FaAngleDown />
                    </span>
                </div>
                <div className={`multiselect-container ${isShown ? 'active' : ''}`} style={{width: containerWidth}}>
                    {_.map(data, (item, index) => {
                        let checked = null;
                        if (defaultValue && defaultValue.length) {
                            checked = defaultValue.some((value) => item.id === value);
                        }
                        return (
                            <div className={`item ${position}`} key={index.toString()} style={{flexBasis: itemWidth}}>
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
                </div>

                <span className='error'>{error}</span>
            </div>
        </>
    );
};
AvMultiSelectCheckboxGroup.displayName = 'AvMultiSelectCheckboxGroup';

export default AvMultiSelectCheckboxGroup;
