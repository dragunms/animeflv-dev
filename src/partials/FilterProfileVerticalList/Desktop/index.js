import './styles.scss';

import React from 'react';

import ViewItem from './ViewItem';
import Pagination from 'src/components/Pagination';
import FilterBar from 'src/partials/FilterBar';

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
];

const FilterProfileVerticalListDesktop = ({title = '', icon = '', listOptions}) => {
    return (
        <div className='filter-profile-vertical-list-desktop'>
            <div className='top'>
                <h3 className='title'>{title}</h3>
                {listOptions}
            </div>
            <FilterBar />
            <div className='profile-vertical-list-wrapper'>
                <ul className='profile-vertical-list'>
                    {data.map((item, index) => {
                        return (
                            <li key={index.toString()}>
                                <ViewItem item={item} icon={icon} />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Pagination totalPages={192} page={1} />
        </div>
    );
};

export default FilterProfileVerticalListDesktop;
