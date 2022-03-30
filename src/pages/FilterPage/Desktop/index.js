import './styles.scss';

import React from 'react';

import FilterTitle from '../FilterTitle';
import FilterBar from 'src/partials/FilterBar';
import HorizontalList from 'src/partials/HorizontalList';
import Pagination from 'src/components/Pagination';

const FilterPageDesktop = () => {
    return (
        <div className='filter-page-desktop'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <FilterTitle />
                        <FilterBar />
                        <HorizontalList row={6} />
                        <Pagination totalPages={192} page={1} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FilterPageDesktop;
