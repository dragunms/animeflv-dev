import './styles.scss';

import React, {useState} from 'react';

import Avatar from '../Avatar';
import FilterProfileHorizontalList from 'src/partials/FilterProfileHorizontalList';
import {FaTh, FaThList} from 'react-icons/fa';
import FilterProfileVerticalList from 'src/partials/FilterProfileVerticalList';

const ProfileFilterPageDesktop = () => {
    const [isVertical, setIsVertical] = useState(false);

    function handleChangeListOnClick() {
        setIsVertical(!isVertical);
    }

    return (
        <div className='profile-filter-page-desktop'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <Avatar />
                    </div>
                    <div className='col-9'>
                        {isVertical ? (
                            <FilterProfileVerticalList
                                listOptions={
                                    <div className='list-options'>
                                        <span
                                            className={`item horizontal-icon ${isVertical ? '' : 'active'}`}
                                            onClick={handleChangeListOnClick}
                                        >
                                            <FaTh />
                                        </span>
                                        <span
                                            className={`item vertical-icon ${isVertical ? 'active' : ''}`}
                                            onClick={handleChangeListOnClick}
                                        >
                                            <FaThList />
                                        </span>
                                    </div>
                                }
                                title='Animes favoritos'
                                icon='heart'
                            />
                        ) : (
                            <FilterProfileHorizontalList
                                listOptions={
                                    <div className='list-options'>
                                        <span
                                            className={`item horizontal-icon ${isVertical ? '' : 'active'}`}
                                            onClick={handleChangeListOnClick}
                                        >
                                            <FaTh />
                                        </span>
                                        <span
                                            className={`item vertical-icon ${isVertical ? 'active' : ''}`}
                                            onClick={handleChangeListOnClick}
                                        >
                                            <FaThList />
                                        </span>
                                    </div>
                                }
                                title='Animes favoritos'
                                icon='heart'
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileFilterPageDesktop;
