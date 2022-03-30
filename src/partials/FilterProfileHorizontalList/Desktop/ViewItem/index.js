import './styles.scss';

import React from 'react';
import {FaHeart, FaStar, FaPlay, FaBookmark} from 'react-icons/fa';

import LazyImage from 'src/components/LazyImage';

const ViewItem = ({item, icon}) => {
    function renderIcon() {
        switch (icon) {
            case 'heart':
                return (
                    <span className='action-icon heart-icon'>
                        <FaHeart />
                    </span>
                );
            case 'play':
                return (
                    <span className='action-icon play-icon'>
                        <FaPlay />
                    </span>
                );
            case 'bookmark':
                return (
                    <span className='action-icon bookmark-icon'>
                        <FaBookmark />
                    </span>
                );
            default:
                return (
                    <span className='action-icon heart-icon'>
                        <FaHeart />
                    </span>
                );
        }
    }

    return (
        <div className='profile-horizontal-list-item'>
            <div className='item-wrap'>
                {renderIcon()}
                <div className='image-wrap'>
                    <figure className='image-wrapper'>
                        <LazyImage src={item.cover} alt={item.title} width={400} className='image content' />
                    </figure>
                    <span className={`type ${item.type}`}>{item.type}</span>
                    <div className='description'>
                        <div className='description-title'>{item.title}</div>
                        <div className='rating'>
                            <span className='star-icon'>
                                <FaStar />
                            </span>
                            <span className='rating-value'>{item.rating}</span>
                        </div>
                        <div className='description-content'>
                            <p className='description-content-title'>Descripcion</p>
                            <p className='description-text'>{item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='title'>{item.title}</h3>
        </div>
    );
};

export default ViewItem;
