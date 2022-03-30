import './styles.scss';

import _ from 'lodash';
import React, {useState} from 'react';
import {FaSortAmountDown, FaSortAmountUp} from 'react-icons/fa';

import ViewItem from './ViewItem';

const DetailEpisodeList = () => {
    const [sort, setSort] = useState(false);

    function handleSortOnClick() {
        setSort(!sort);
    }

    return (
        <div className='detail-episode-list'>
            <div className='top'>
                <div className='title'>Lista de episodios</div>
                <div className='option'>
                    <div className={`sort ${sort ? 'asc' : 'desc'}`} onClick={handleSortOnClick}>
                        {sort ? (
                            <>
                                <span className='sort-icon'>
                                    <FaSortAmountUp />
                                </span>
                                <span>Menor a mayor</span>
                            </>
                        ) : (
                            <>
                                <span className='sort-icon'>
                                    <FaSortAmountDown />
                                </span>
                                <span>Mayor a menor</span>
                            </>
                        )}
                    </div>
                    <div className='search'>
                        <input placeholder='Buscar' className='search-input' />
                    </div>
                </div>
            </div>
            <div className='episode-list-wrap'>
                <ul className='episode-list'>
                    <ViewItem upcomingEpisode />
                    {_.range(0, 24).map((item, index) => {
                        return <ViewItem key={index.toString()} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DetailEpisodeList;
