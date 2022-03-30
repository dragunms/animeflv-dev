import './styles.scss';

import React, {useEffect, useState} from 'react';
import {FaFilter} from 'react-icons/fa';

import AvForm from 'src/components/Form/AvForm';
import AvMultiSelectCheckboxGroup from 'src/components/Form/AvMultiSelectCheckboxGroup';

const data = [
    {label: 'anime', value: 'anime'},
    {label: 'genre', value: 'genre'},
    {label: 'movie', value: 'movie'},
    {label: 'action', value: 'action'},
    {label: 'isekai', value: 'isekai'},
];

const FilterBarDesktop = () => {
    const [value, setValue] = useState([]);
    const [labelValue, setLabelValue] = useState('');

    function handleOnSubmit() {}

    function handleOnChange(e) {
        const checkedValue = e.target.value;
        if (e.target.checked) {
            setValue((prevState) => [...prevState, checkedValue]);
        } else {
            setValue(value.filter((item) => item !== checkedValue));
        }
    }

    useEffect(() => {
        if (value.length > 1) {
            setLabelValue('2 seleccionados');
        } else {
            setLabelValue(value.toString());
        }
    }, [value]);

    return (
        <div className='filter-bar-desktop'>
            <AvForm onSubmit={handleOnSubmit}>
                <AvMultiSelectCheckboxGroup
                    value={labelValue}
                    label='Genero'
                    defaultValue='Todos'
                    onChange={handleOnChange}
                    data={data}
                />
                <AvMultiSelectCheckboxGroup
                    value={labelValue}
                    label='Genero'
                    defaultValue='Todos'
                    onChange={handleOnChange}
                    data={data}
                />
                <AvMultiSelectCheckboxGroup
                    value={labelValue}
                    label='Genero'
                    defaultValue='Todos'
                    onChange={handleOnChange}
                    data={data}
                />
                <AvMultiSelectCheckboxGroup
                    value={labelValue}
                    label='Genero'
                    defaultValue='Todos'
                    onChange={handleOnChange}
                    data={data}
                />
                <button type='submit' className='filter-btn'>
                    <span className='filter-icon'>
                        <FaFilter />
                    </span>
                    <span className='filter-label'>Filtrar</span>
                </button>
            </AvForm>
        </div>
    );
};

export default FilterBarDesktop;
