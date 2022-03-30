import './styles.scss';

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaRegPlayCircle, FaStar, FaUser} from 'react-icons/all';

import LazyImage from 'src/components/LazyImage';

import {DETAIL_PATH} from 'src/constants/subPaths';

const ViewItem = ({item, index, row = 1}) => {
    const [isShowDescription, setIsShowDescription] = useState(false);

    const itemBasis = `${100 / row}%`;

    function handleShowDescriptionOnEvent() {
        setIsShowDescription(true);
    }
    function handleHideDescriptionOnEvent() {
        setIsShowDescription(false);
    }

    if (!item.id) return null;

    return (
        <li
            className='horizontal-list-item'
            onMouseEnter={handleShowDescriptionOnEvent}
            onClick={handleShowDescriptionOnEvent}
            onMouseLeave={handleHideDescriptionOnEvent}
            style={{flexBasis: itemBasis}}
        >
            <Link to={`${DETAIL_PATH.PATH}/${item.id}`} className='horizontal-item'>
                <span className='premiere'>
                    <span>ESTRENO</span>
                </span>
                <div className='image-wrap'>
                    <div className='layer-wrap'>
                        <div className='layer'>
                            <FaRegPlayCircle />
                        </div>
                    </div>
                    <LazyImage src={item.cover} alt={item.title} width={400} className='image' />
                    <span className={`type ${item.type}`}>{item.type}</span>
                </div>
                <div className='title'>{item.title}</div>
            </Link>
            {isShowDescription && (
                <div className={`description ${(index + 1) % row === 0 ? `left` : ``}`}>
                    <div className='description-title'>{item.title}</div>
                    <div className='description-info'>
                        <span className={`type ${item.type}`}>{item.type}</span>
                        <span className='rating-icon'>
                            <FaStar />
                        </span>
                        {item.rating}
                    </div>
                    <div className='description-content'>{item.description}</div>
                    <div className='description-bottom'>
                        <div className='description-follower'>
                            {item.follower && (
                                <>
                                    <span className='follower-icon'>
                                        <FaUser />
                                    </span>
                                    <span className='value'>
                                        <span className='follower'>2222</span>
                                        <span>Followers</span>
                                    </span>
                                </>
                            )}
                        </div>
                        <Link to={`${DETAIL_PATH.PATH}/${item.id}`} className='description-button'>
                            VER ANIME
                        </Link>
                    </div>
                </div>
            )}
        </li>
    );
};

export default ViewItem;
