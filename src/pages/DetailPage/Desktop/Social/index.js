import './styles.scss';

import _ from 'lodash';
import React from 'react';
import {FaStar} from 'react-icons/all';

const Social = () => {
    return (
        <div className='detail-social'>
            <div className='vote-wrap'>
                <div className='vote-label'>4.8</div>
                <div className='vote-value'>
                    <div className='rating'>
                        {_.range(0, 4).map((item, index) => {
                            return (
                                <span className='rating-icon' key={index.toString()}>
                                    <FaStar />
                                </span>
                            );
                        })}
                    </div>
                    <span className='vote'>
                        <strong>650</strong> votos
                    </span>
                </div>
            </div>
            <ul className='social-list'>
                <li className='social-item'>
                    <div className='item facebook'>Facebook</div>
                </li>
                <div className='social-item'>
                    <div className='item twitter'>Twitter</div>
                </div>
            </ul>
        </div>
    );
};

export default Social;
