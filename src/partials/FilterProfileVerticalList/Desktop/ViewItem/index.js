import './styles.scss';

import React from 'react';
import {FaStar} from 'react-icons/fa';

import LazyImage from 'src/components/LazyImage';

const ViewItem = ({item}) => {
    return (
        <div className='profile-vertical-list-item'>
            <div className='item-wrap'>
                <figure className='image-wrapper'>
                    <LazyImage src={item.cover} alt={item.title} width={400} className='image content' />
                </figure>
                <span className={`type ${item.type}`}>{item.type}</span>
                <span className='premiere'>
                    <span>ESTRENO</span>
                </span>
                <div className='description'>
                    <h3 className='description-title'>{item.title}</h3>
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
    );
};

export default ViewItem;
