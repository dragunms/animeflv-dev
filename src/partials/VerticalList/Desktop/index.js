import './styles.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import {FaPlayCircle, FaPlay} from 'react-icons/fa';

import {HOME_PATH} from 'src/constants/subPaths';

const data = [
    {
        title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
        type: 'anime',
        description:
            'Después de que una serie de misteriosas desapariciones comienzan a plagar un tren, los múltiples intentos del Cuerpo de Cazadores de Demonios para remediar el problema resultan infructuosos. Para evitar más bajas, el Pilar de las Llamas, Kyoujuro Rengoku, se encarga de eliminar la amenaza. Lo aco...',
        rating: '4.8',
        cover: 'https://www3.animeflv.net/uploads/animes/covers/3472.jpg',
        is_premiere: 0,
    },
    {
        title: 'Cestvs: The Roman Fighter',
        type: 'ova',
        description:
            'Cestvs, un joven esclavo, lucha por su libertad como un gladiador con los nudillos desnudos, estudiando al mismo tiempo a un antiguo gladiador que luchó contra los guardias imperiales en la época romana.',
        rating: '3.8',
        cover: 'https://www3.animeflv.net/uploads/animes/covers/3470.jpg',
        is_premiere: 1,
    },
    {
        title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
        type: 'anime',
        description:
            'Después de que una serie de misteriosas desapariciones comienzan a plagar un tren, los múltiples intentos del Cuerpo de Cazadores de Demonios para remediar el problema resultan infructuosos. Para evitar más bajas, el Pilar de las Llamas, Kyoujuro Rengoku, se encarga de eliminar la amenaza. Lo aco...',
        rating: '4.8',
        cover: 'https://www3.animeflv.net/uploads/animes/covers/3472.jpg',
        is_premiere: 0,
    },
    {
        title: 'Cestvs: The Roman Fighter',
        type: 'ova',
        description:
            'Cestvs, un joven esclavo, lucha por su libertad como un gladiador con los nudillos desnudos, estudiando al mismo tiempo a un antiguo gladiador que luchó contra los guardias imperiales en la época romana.',
        rating: '3.8',
        cover: 'https://www3.animeflv.net/uploads/animes/covers/3470.jpg',
        is_premiere: 1,
    },
    {
        title: 'Kimetsu no Yaiba Movie: Mugen Ressha-hen',
        type: 'anime',
        description:
            'Después de que una serie de misteriosas desapariciones comienzan a plagar un tren, los múltiples intentos del Cuerpo de Cazadores de Demonios para remediar el problema resultan infructuosos. Para evitar más bajas, el Pilar de las Llamas, Kyoujuro Rengoku, se encarga de eliminar la amenaza. Lo aco...',
        rating: '4.8',
        cover: 'https://www3.animeflv.net/uploads/animes/covers/3472.jpg',
        is_premiere: 0,
    },
    {
        title: 'Cestvs: The Roman Fighter',
        type: 'ova',
        description:
            'Cestvs, un joven esclavo, lucha por su libertad como un gladiador con los nudillos desnudos, estudiando al mismo tiempo a un antiguo gladiador que luchó contra los guardias imperiales en la época romana.',
        rating: '3.8',
        cover: 'https://www3.animeflv.net/uploads/animes/covers/3470.jpg',
        is_premiere: 1,
    },
];

const VerticalListDesktop = () => {
    return (
        <div className='vertical-list-desktop'>
            <div className='vertical-list-header'>
                <span className='header-title'>ANIMES EN EMISIÓN</span>
                <div className='header-icon'>
                    <FaPlay />
                </div>
            </div>
            <div className='list-wrap'>
                <ul className='list'>
                    {data.map((item, index) => {
                        return (
                            <li key={index.toString()}>
                                <Link to={HOME_PATH.PATH} className='item'>
                                    <span className='item-icon'>
                                        <FaPlayCircle />
                                    </span>
                                    <span className='item-title'>{item.title}</span>
                                    <span className={`item-type ${item.type}`}>{item.type}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default VerticalListDesktop;
