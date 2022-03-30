import './styles.scss';

import React from 'react';
import LazyImage from 'src/components/LazyImage';

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

const DetailWatchVerticalList = ({className = 'absolute'}) => {
    return (
        <div className='detail-watch-vertical-list'>
            <div className={`detail-watch-vertical-list-wrapper ${className}`}>
                <div className='top'>
                    <h3 className='title'>Noticias de Anime</h3>
                </div>
                <div className='vertical-list-wrap'>
                    <ul className='vertical-list'>
                        {data.map((item, index) => {
                            return (
                                <li className='list-item' key={index.toString()}>
                                    <div className='image-wrap'>
                                        <LazyImage src={item.cover} alt={item.title} className='image content' />
                                        <span className='date'>09.06.2021</span>
                                    </div>
                                    <div className='title-wrap'>
                                        <h4 className='title'>{item.title}</h4>
                                        <span className='category'>{item.type}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default DetailWatchVerticalList;
