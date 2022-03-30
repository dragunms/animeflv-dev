import './styles.scss';

import React from 'react';
import querystring from 'querystring';
import ReactPaginate from 'react-paginate';
import {withRouter} from 'react-router-dom';

import history from 'src/history';

const Pagination = ({totalPages, page, location, ...props}) => {
    function handleOnPageChange(p) {
        const nextPage = p.selected + 1;

        if (nextPage !== page) {
            const params = querystring.decode(location.search.replace('?', ''));
            if (nextPage === 1) {
                delete params.page;
            } else {
                params.page = nextPage;
            }
            history.replace(`${location.pathname}?${querystring.encode(params)}`);
        }
    }

    if (totalPages <= 1) {
        return null;
    }

    return (
        <ReactPaginate
            onPageChange={handleOnPageChange}
            previousLabel='«'
            nextLabel='»'
            breakClassName='break-me'
            containerClassName='pagination'
            marginPagesDisplayed={1}
            pageRangeDisplayed={9}
            subContainerClassName='pages pagination'
            activeClassName='page-active'
            pageClassName='pagination-item'
            initialPage={page - 1}
            pageCount={totalPages}
            {...props}
        />
    );
};
export default withRouter(Pagination);
