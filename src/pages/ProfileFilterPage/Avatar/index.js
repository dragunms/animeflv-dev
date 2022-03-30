import './styles.scss';

import React from 'react';
import {FaFacebookF, FaTwitter, FaGooglePlusG} from 'react-icons/fa';

import LazyImage from 'src/components/LazyImage';

const data = {
    id: 1,
    title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
    type: 'anime',
    description:
        'Después de que una serie de misteriosas desapariciones comienzan a plagar un tren, los múltiples intentos del Cuerpo de Cazadores de Demonios para remediar el problema resultan infructuosos. Para evitar más bajas, el Pilar de las Llamas, Kyoujuro Rengoku, se encarga de eliminar la amenaza. Lo aco...',
    rating: '4.8',
    cover: 'https://gogocdn.net/cover/motto-majime-ni-fumajime-kaiketsu-zorori.png',
    is_premiere: 0,
};

const Avatar = () => {
    return (
        <div className='avatar'>
            <div className='avatar-wrapper'>
                <div className='background' style={{backgroundImage: `url(${data.cover})`}} />

                <div className='avatar-image-wrap'>
                    <LazyImage src={data.cover} className='avatar-image' />
                </div>
                <div className='avatar-name'>{data.title}</div>
                <ul className='follow-list'>
                    <li className='follow-item'>
                        <a href='google.com' className='follow-icon facebook-follow'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className='follow-item'>
                        <a href='google.com' className='follow-icon twitter-follow'>
                            <FaTwitter />
                        </a>
                    </li>
                    <li className='follow-item'>
                        <a href='google.com' className='follow-icon google-follow'>
                            <FaGooglePlusG />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Avatar;
