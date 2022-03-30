import './styles.scss';

import React from 'react';

import FilterTitle from '../FilterTitle';
import FilterBar from 'src/partials/FilterBar';
import HorizontalList from 'src/partials/HorizontalList';
import Pagination from 'src/components/Pagination';

const FilterPageMobile = () => {
    return (
        <div className='filter-page-mobile'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <FilterTitle />
                        <FilterBar />
                        <HorizontalList row={1} />
                        <Pagination totalPages={192} page={1} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FilterPageMobile;
