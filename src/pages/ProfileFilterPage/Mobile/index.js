import './styles.scss';

import React, {useState} from 'react';

import Avatar from '../Avatar';
import FilterProfileHorizontalList from 'src/partials/FilterProfileHorizontalList';
import {FaTh, FaThList} from 'react-icons/fa';
import FilterProfileVerticalList from 'src/partials/FilterProfileVerticalList';

const ProfileFilterPageMobile = () => {
    const [isVertical, setIsVertical] = useState(false);

    function handleChangeListOnClick() {
        setIsVertical(!isVertical);
    }

    return (
        <div className='profile-filter-page-mobile'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Avatar />
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

export default ProfileFilterPageMobile;
