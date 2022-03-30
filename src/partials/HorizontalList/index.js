import './styles.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import {FaStar} from 'react-icons/all';

import ViewItem from './Item';

import {HOME_PATH} from 'src/constants/subPaths';

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

const HorizontalList = ({row, title}) => {
    return (
        <div className='horizontal-list'>
            {title && (
                <div className='title-wrap'>
                    <div className='title-block'>
                        <div className='prefix-icon-wrap'>
                            <div className='prefix-icon'>
                                <FaStar />
                            </div>
                        </div>
                        <h2 className='title'>{title}</h2>
                    </div>
                    <div className='order'>
                        <Link to={HOME_PATH.PATH} className='link'>
                            HOY
                        </Link>
                    </div>
                </div>
            )}
            <div className='horizontal-list-wrap'>
                <ul className='horizontal-list-list'>
                    {data.map((item, index) => {
                        return <ViewItem key={index.toString()} index={index} item={item} row={row} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default HorizontalList;
