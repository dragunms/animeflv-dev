import './styles.scss';

import React from 'react';
import {FaStar} from 'react-icons/all';

const AboutUsPageDesktop = () => {
    return (
        <div className='about-us-page-desktop'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-wrap'>
                            <div className='prefix-icon-wrap'>
                                <div className='prefix-icon'>
                                    <FaStar />
                                </div>
                            </div>
                            <h2 className='title'>Sobre AnimeFLV</h2>
                        </div>
                        <div className='main'>
                            <p className='main-content'>
                                AnimeFLV.NET, tiene como objetivo brindarte un amplio catálogo de animes que no son
                                transmitidos en los canales de TV en señal abierta, teniendo como fin el compartir con
                                todos nuestros seguidores la mayor cantidad de episodios y series anime que salen cada
                                año.
                                <br />
                                <br />
                                Conocemos nuestras limitaciones y es por ello que siempre intentamos innovar en la
                                calidad del servicio, tratamos mes a mes de hacer alianzas comerciales con las mejores
                                empresas a modo de poder brindarte una mejor experiencia y evolucionar como plataforma
                                para así muy pronto visualizar vídeos de <strong>Anime Online de manera Legal</strong>.
                                <br />
                                <br />
                                Cada mes estamos implementando mejoras y hacemos todo lo posible por mejorar día a día.
                                En nuestra FanPage AnimeFLV podrán enterarse de cualquier novedad en el sitio web,
                                actualmente no contamos con publicidad intrusiva de tal modo que nuestros usuarios
                                puedan navegar sin ningún problema en nuestra plataforma.
                                <br />
                                <br />
                                Además de ser un sitio web para visualizar Episodios de Anime, alojados en servidores
                                externos fuera de AnimeFLV, intentamos ser un referente para compartir la cultura
                                asiática. De tal modo que en un futuro no muy lejano se vienen actualizaciones bastante
                                buenas que los dejarán realmente sorprendidos.
                                <br />
                                <br />
                                Estamos convencidos de que somos la Web Número 1 de Anime en Línea en Español y todo
                                esto es gracias a vuestro apoyo para con nosotros.
                                <br />
                                <br />
                                Por último muchas personas nos han preguntado ¿Porqué? el término FLV, el término FLV se
                                hizo popular por los años 2008-2010 cuando los vídeos en línea no superaban la calidad
                                de 480p (Por lo general eran 360p), el formato más popular en ese momento era el formato
                                FLV, ya que cada episodio podía pesar hasta 16MB siendo muy rápido al reproducir, dicho
                                esto tiene sentido, ya que por esos años la banda ancha era casi nula en toda
                                latinoamérica y es así como nació el Término, <strong>AnimeFLV</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPageDesktop;
