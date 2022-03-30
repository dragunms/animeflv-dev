import './styles.scss';

import React, {useEffect, useRef, useState} from 'react';
import {FaSearch, FaSpinner} from 'react-icons/fa';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {DETAIL_PATH} from 'src/constants/subPaths';
import LazyImage from 'src/components/LazyImage';

const searchData = [
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

const SearchInput = () => {
    const [keywords, setKeywords] = useState('');
    const [showSearchSelect, SetShowSearchSelect] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [data, setData] = useState([]);
    const inputRef = useRef();

    let lastFetchId = 0;

    function handleShowSearchSelect() {
        SetShowSearchSelect(true);
    }

    function handleHideSearchSelect(event) {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            SetShowSearchSelect(false);
        }
    }

    function handleEnterOnKeyPress(target) {
        if (target.charCode === 13 && keywords && keywords.trim()) {
            console.log('searched');
        }
    }

    function handleFetchDataOnSearch(values) {
        lastFetchId += 1;
        const fetchId = lastFetchId;
        setFetching(true);
        handleShowSearchSelect();
        if (fetchId !== lastFetchId) {
            return;
        }
        setData(searchData.filter((item) => item.title.includes(keywords)));
        setTimeout(() => {
            setFetching(false);
        }, 1000);

        // serviceAPI({keywords: values})
        //     .then((body) => {
        //         if (fetchId !== lastFetchId) {
        //             // for fetch callback order
        //             return;
        //         }
        //
        //         const result = body.data.docs.map((item) => ({
        //             title: item.title,
        //             id: item.id,
        //             image: item.image,
        //         }));
        //
        //         setData(result);
        //         setFetching(false);
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });
    }

    const fetchUser = _.debounce(handleFetchDataOnSearch, 800);

    function handleSearchInputOnChange(e) {
        setKeywords(e.target.value);
        if (e.target.value !== '') {
            fetchUser();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleHideSearchSelect);

        return () => {
            document.removeEventListener('mousedown', handleHideSearchSelect);
        };
    }, []);

    return (
        <div className='header-search-input-mobile' ref={inputRef}>
            <input
                type='text'
                className='input'
                placeholder='Buscar...'
                onChange={handleSearchInputOnChange}
                onKeyPress={handleEnterOnKeyPress}
            />
            <div className='search-icon-wrap'>
                <FaSearch className='search-icon' />
            </div>
            {showSearchSelect && keywords.trim() !== '' && (
                <div className='header-search-autocomplete'>
                    <div className='autocomplete-body'>
                        {!fetching ? (
                            <>
                                {data.length === 0 ? (
                                    <div className='autocomplete-loading'>No se encontraron resultados</div>
                                ) : (
                                    <>
                                        {data.map((item, index) => {
                                            return (
                                                <div className='autocomplete-list-item' key={index.toString()}>
                                                    <Link
                                                        to={`${DETAIL_PATH.PATH}/${item.id}`}
                                                        className='autocomplete-item'
                                                    >
                                                        <LazyImage
                                                            src={item.cover}
                                                            className='autocomplete-item-image'
                                                        />
                                                        <div className='autocomplete-item-title'>
                                                            <span className='title'>{item.title}</span>
                                                            <span className={`type ${item.type}`}>{item.type}</span>
                                                        </div>
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </>
                                )}
                            </>
                        ) : (
                            <div className='autocomplete-loading'>
                                <span className='spin-icon'>
                                    <FaSpinner />
                                </span>
                                Buscando...
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchInput;
