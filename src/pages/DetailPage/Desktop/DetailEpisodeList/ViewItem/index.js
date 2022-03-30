import './styles.scss';

import upcomingLogo from 'assets/images/utils/upcoming.png';

import React from 'react';
import {Link} from 'react-router-dom';
import {FaRegCalendarAlt, FaPlayCircle} from 'react-icons/fa';

import LazyImage from 'src/components/LazyImage';

import {DETAIL_WATCH_PATH} from 'src/constants/subPaths';

const ViewItem = ({upcomingEpisode, className = ''}) => {
    return (
        <>
            {upcomingEpisode ? (
                <li className='detail-episode-item upcoming-episode'>
                    <Link to={`${DETAIL_WATCH_PATH.PATH}/1`} className='item-container'>
                        <span className='play-icon'>
                            <FaPlayCircle />
                        </span>
                        <span className='image-wrap'>
                            <LazyImage src={upcomingLogo} alt='test' className='image content' width={300} />
                        </span>
                        <div className='item-title'>
                            <h3 className='title'>PROXIMO EPISODIO</h3>
                        </div>
                    </Link>
                    <div className='upcoming-date'>
                        <span className='date'>2021-06-12</span>
                        <span className='calendar-icon'>
                            <FaRegCalendarAlt />
                        </span>
                    </div>
                </li>
            ) : (
                <li className={`detail-episode-item ${className}`}>
                    <Link to={`${DETAIL_WATCH_PATH.PATH}/1`} className='item-container'>
                        <span className='play-icon'>
                            <FaPlayCircle />
                        </span>
                        <span className='image-wrap'>
                            <LazyImage
                                src='https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png'
                                alt='test'
                                className='image content'
                                width={300}
                            />
                        </span>
                        <div className='item-title'>
                            <h3 className='title'>Vivy: Fluorite Eyes Son</h3>
                            <p className='sub-title'>Episodio 11</p>
                        </div>
                    </Link>
                    <div className='switch'>
                        <span className='switch-label'>not visto</span>
                        <label htmlFor='seen' className='seen'>
                            <input id='seen' type='checkbox' className='switch' />
                            <span className='slider round' />
                        </label>
                    </div>
                </li>
            )}
        </>
    );
};

export default ViewItem;
