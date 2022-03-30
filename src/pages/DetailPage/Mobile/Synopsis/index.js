import './styles.scss';

import _ from 'lodash';
import React from 'react';

const Synopsis = () => {
    return (
        <div className='synopsis'>
            <div className='synopsis-title'>Sinopsis</div>
            <div className='category-list'>
                {_.range(0, 4).map((item, index) => {
                    return (
                        <span className='category-item' key={index.toString()}>
                            Anime
                        </span>
                    );
                })}
            </div>
            <div className='synopsis-description'>
                <p>
                    La historia tiene lugar en “Nearland”, un parque temático donde “los sueños, la esperanza y la
                    ciencia” coexisten como un parque temático de Inteligencias Artificiales (IA). Este lugar es donde
                    nace la primera IA automatizada de tipo humano. Vivy es una IA que canta en el escenario para los
                    visitantes del parque todos los días, ya que su directiva es “hacer felices a todos a través de la
                    música”. Actúa de todo corazón para los visitantes del parque. Un día, una IA llamada Matsumoto
                    aparece ante ella. Dice que ha venido desde 100 años en el futuro con la directiva de “trabajar con
                    Vivy para corregir la historia y detener la guerra entre la IA y los humanos que estalla dentro de
                    100 años”. Así comienza el viaje de 100 años de la cantante de IA Vivy.
                </p>
            </div>
        </div>
    );
};

export default Synopsis;
