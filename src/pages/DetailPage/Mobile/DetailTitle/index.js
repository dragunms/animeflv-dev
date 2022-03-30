import './styles.scss';

import React from 'react';

import Social from '../Social';
import LazyImage from 'src/components/LazyImage';

const data = {
    id: 1,
    title: 'Cestvs: The Roman Fighter',
    type: 'anime',
    description:
        'Cestvs, un joven esclavo, lucha por su libertad como un gladiador con los nudillos desnudos, estudiando al mismo tiempo a un antiguo gladiador que luchó contra los guardias imperiales en la época romana.',
    rating: '3.8',
    cover: 'https://gogocdn.net/cover/odd-taxi.png',
    is_premiere: 1,
    alt: ['Vivy -Fluorite Eyes Song', 'Vivy -Fluorite Eyes Song- (ヴィヴィ -フローライトアイズソング-)'],
};

const DetailTitle = () => {
    return (
        <div className='detail-title'>
            <div className='background'>
                <LazyImage src={data.cover} className='background-image' />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-wrap'>
                            <div className='top'>
                                <h1 className='title'>{data.title}</h1>
                                <span className={`type ${data.type}`}>{data.type}</span>
                            </div>
                            <div className='bottom'>
                                {data.alt.map((item, index) => {
                                    return (
                                        <span className='alt-title' key={index.toString()}>
                                            {item}
                                        </span>
                                    );
                                })}
                                <Social />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTitle;
