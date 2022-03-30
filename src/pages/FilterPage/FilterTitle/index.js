import './styles.scss';

import React from 'react';
import {FaStar} from 'react-icons/all';

const FilterTitle = () => {
    return (
        <div className='filter-title '>
            <div className='prefix-icon-wrap'>
                <div className='prefix-icon'>
                    <FaStar />
                </div>
            </div>

            <h2 className='title'>Lista completa de Animes</h2>
        </div>
    );
};

export default FilterTitle;
