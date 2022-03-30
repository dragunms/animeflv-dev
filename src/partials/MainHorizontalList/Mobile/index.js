import './styles.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import {FaRegPlayCircle} from 'react-icons/fa';

import LazyImage from 'src/components/LazyImage';

import {HOME_PATH, DETAIL_WATCH_PATH} from 'src/constants/subPaths';

const data = [
    {
        id: 1,
        title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
        type: 'anime',
        description:
            'Después de que una serie de misteriosas desapariciones comienzan a plagar un tren, los múltiples intentos del Cuerpo de Cazadores de Demonios para remediar el problema resultan infructuosos. Para evitar más bajas, el Pilar de las Llamas, Kyoujuro Rengoku, se encarga de eliminar la amenaza. Lo aco...',
        rating: '4.8',
        cover: 'https://gogocdn.net/cover/motto-majime-ni-fumajime-kaiketsu-zorori.png',
        is_premiere: 0,
    },
    {
        id: 1,
        title: 'Cestvs: The Roman Fighter',
        type: 'ova',
        description:
            'Cestvs, un joven esclavo, lucha por su libertad como un gladiador con los nudillos desnudos, estudiando al mismo tiempo a un antiguo gladiador que luchó contra los guardias imperiales en la época romana.',
        rating: '3.8',
        cover: 'https://gogocdn.net/cover/odd-taxi.png',
        is_premiere: 1,
    },
    {
        id: 1,
        title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
        type: 'anime',
        description:
            'Después de que una serie de misteriosas desapariciones comienzan a plagar un tren, los múltiples intentos del Cuerpo de Cazadores de Demonios para remediar el problema resultan infructuosos. Para evitar más bajas, el Pilar de las Llamas, Kyoujuro Rengoku, se encarga de eliminar la amenaza. Lo aco...',
        rating: '4.8',
        cover: 'https://gogocdn.net/cover/motto-majime-ni-fumajime-kaiketsu-zorori.png',
        is_premiere: 0,
    },
    {
        id: 1,
        title: 'Cestvs: The Roman Fighter',
        type: 'ova',
        description:
            'Cestvs, un joven esclavo, lucha por su libertad como un gladiador con los nudillos desnudos, estudiando al mismo tiempo a un antiguo gladiador que luchó contra los guardias imperiales en la época romana.',
        rating: '3.8',
        cover: 'https://gogocdn.net/cover/motto-majime-ni-fumajime-kaiketsu-zorori.png',
        is_premiere: 1,
    },
    {
        id: 1,
        title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
        type: 'anime',
        description:
            'Después de que una serie de misteriosas desapariciones comienzan a plagar un tren, los múltiples intentos del Cuerpo de Cazadores de Demonios para remediar el problema resultan infructuosos. Para evitar más bajas, el Pilar de las Llamas, Kyoujuro Rengoku, se encarga de eliminar la amenaza. Lo aco...',
        rating: '4.8',
        cover: 'https://gogocdn.net/cover/motto-majime-ni-fumajime-kaiketsu-zorori.png',
        is_premiere: 0,
    },
    {
        id: 1,
        title: 'Cestvs: The Roman Fighter',
        type: 'ova',
        description:
            'Cestvs, un joven esclavo, lucha por su libertad como un gladiador con los nudillos desnudos, estudiando al mismo tiempo a un antiguo gladiador que luchó contra los guardias imperiales en la época romana.',
        rating: '3.8',
        cover: 'https://gogocdn.net/cover/odd-taxi.png',
        is_premiere: 1,
    },
];

const MainHorizontalListMobile = () => {
    return (
        <div className='main-horizontal-list-mobile'>
            <div className='title-wrap'>
                <h2 className='title'>Últimos episodios</h2>
                <div className='order'>
                    <Link to={HOME_PATH.PATH} className='link'>
                        HOY
                    </Link>
                </div>
            </div>
            <div className='main-list-wrap'>
                <ul className='main-horizontal-list'>
                    {data.map((item, index) => {
                        return (
                            <li key={index.toString()} className='main-list-item-wrap'>
                                <Link to={`${DETAIL_WATCH_PATH.PATH}/${item.id}`} className='main-list-item'>
                                    <span className='image'>
                                        <LazyImage src={item.cover} alt={item.title} className='content' />
                                    </span>
                                    <div className='info-wrap'>
                                        <span className='episode'>episode 9</span>
                                        <h4 className='title'>{item.title}</h4>
                                    </div>
                                    <div className='icon'>
                                        <FaRegPlayCircle />
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default MainHorizontalListMobile;
