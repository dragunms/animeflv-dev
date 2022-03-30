import './styles.scss';

import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router-dom';
import {FaDesktop, FaHeart, FaCheck, FaBookmark} from 'react-icons/all';

import LazyImage from 'src/components/LazyImage';

import {PROFILE_PATH} from 'src/constants/subPaths';

const data = {
    id: 1,
    title: 'Cestvs: The Roman Fighter',
    type: 'ova',
    description:
        'Cestvs, un joven esclavo, lucha por su libertad como un gladiador con los nudillos desnudos, estudiando al mismo tiempo a un antiguo gladiador que luchó contra los guardias imperiales en la época romana.',
    rating: '3.8',
    cover: 'https://gogocdn.net/cover/odd-taxi.png',
    is_premiere: 1,
};

const DetailProfile = () => {
    return (
        <div className='detail-profile'>
            <div className='cover-container'>
                <div className='cover-wrap'>
                    <LazyImage src={data.cover} alt={data.title} width={400} className='cover content' />
                </div>
            </div>

            <div className='watch-btn'>
                <span className='watch-btn-wrapper'>
                    <span className='watch-icon'>
                        <FaDesktop />
                    </span>
                    <span className='watch-label'>EN EMISION</span>
                </span>
            </div>
            <div className='option-btn'>
                <div className='option-list-btn'>
                    <div className='option-item'>
                        <div className='favorite'>
                            <span className='favorite-icon'>
                                <FaHeart />
                            </span>
                            <div className='favorite-label'>
                                <strong>AGREGAR</strong>
                                <span>a favoritos</span>
                            </div>
                        </div>
                    </div>
                    <div className='option-item'>
                        <div className='follow'>
                            <span className='follow-icon'>
                                <FaCheck />
                            </span>
                            <div className='follow-label'>
                                <strong>SEGUIR</strong>
                                <span>Anime</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='waiting-list'>
                    <span className='waiting-list-icon'>
                        <FaBookmark />
                    </span>
                    <div className='waiting-list-label'>LISTA DE ESPERA</div>
                </div>
            </div>
            <div className='follower'>
                <div className='follower-title'>
                    Seguidores: <span className='follower-title-value'>6830</span>
                </div>
                <ul className='follower-list'>
                    {_.range(0, 8).map((item, index) => {
                        return (
                            <li className='follower-item' key={index.toString()}>
                                <Link to={`${PROFILE_PATH.PATH}/${index}`}>
                                    <LazyImage src={data.cover} alt={data.title} width={100} className='content' />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DetailProfile;
