import './styles.scss';

import _ from 'lodash';
import React, {useEffect, useRef, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {
    FaThList,
    FaRegFlag,
    FaRegEye,
    FaRegLightbulb,
    FaExpandAlt,
    FaDownload,
    FaShareAlt,
    FaCompressAlt,
} from 'react-icons/fa';

import VideoPlayer from 'src/components/VideoPlayer';
import ReportModal from './ReportModal';

import {DETAIL_PATH, DETAIL_WATCH_PATH} from 'src/constants/subPaths';

const ViewItem = ({changeLayout, layout, className = ''}) => {
    const [light, setLight] = useState(false);
    const [showReport, setShowReport] = useState(false);

    const videoRef = useRef();

    function handleChangeLightOnClick() {
        setLight(!light);
    }

    function handleShowReportModalOnClick() {
        setShowReport(true);
    }

    function handleHideReportModalOnClick() {
        setShowReport(false);
    }

    function handleHideLightOnClick(event) {
        if (videoRef.current && !videoRef.current.contains(event.target)) {
            setLight(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleHideLightOnClick);

        return () => {
            document.removeEventListener('mousedown', handleHideLightOnClick);
        };
    }, []);

    return (
        <div className={`watch-detail-item ${className}`}>
            <span className={`bg-light-cover ${light ? 'active' : ''}`} />
            <div className='top'>
                <div className='title-wrap'>
                    <h1 className='title'>Kimetsu no Yaiba Movie: Mugen Ressha-hen</h1>
                    <h2 className='type'>Pelicula</h2>
                </div>
            </div>
            <div className='main'>
                <ul className='server-list'>
                    {_.range(0, 6).map((item, index) => {
                        return (
                            <li className='server-item' key={index.toString()}>
                                <NavLink to={`${DETAIL_WATCH_PATH.PATH}/${index}`} className='text'>
                                    Opción {index.toString()}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <div className='video-player' ref={videoRef}>
                    <VideoPlayer />
                </div>
                <div className='option'>
                    <div className='video-option'>
                        <div className='episode-list-item'>
                            <Link to={`${DETAIL_PATH.PATH}/1`}>
                                <span className='episode-list-icon'>
                                    <FaThList />
                                </span>
                            </Link>
                        </div>
                        <div className='report-list-item' onClick={handleShowReportModalOnClick}>
                            <span className='report-icon'>
                                <FaRegFlag />
                            </span>
                            <div className='report-title'>
                                <span className='title'>REPORTAR</span>
                                <span className='sub'>Episodio</span>
                            </div>
                        </div>
                        <ReportModal showReport={showReport} onHide={handleHideReportModalOnClick} />
                        <div className='option-item viewed'>
                            <span className='icon eye-icon'>
                                <FaRegEye />
                            </span>
                        </div>
                        <div className='option-item light' onClick={handleChangeLightOnClick}>
                            <span className='icon light-icon'>
                                <FaRegLightbulb />
                            </span>
                        </div>
                        <div className='option-item expand' onClick={changeLayout}>
                            {layout ? (
                                <span className='icon compress-icon'>
                                    <FaCompressAlt />
                                </span>
                            ) : (
                                <span className='icon expand-icon'>
                                    <FaExpandAlt />
                                </span>
                            )}
                        </div>
                    </div>
                    <div className='download-option'>
                        <span className='download-icon'>
                            <FaDownload />
                        </span>
                        <div className='download-title'>
                            <span className='title'>DESCARGAR</span>
                            <span className='sub'>Episodio</span>
                        </div>
                    </div>
                </div>
                <div className='share'>
                    <span className='share-icon'>
                        <FaShareAlt />
                    </span>
                    <div className='share-title'>
                        <span className='title'>COMPARTIR</span>
                        <span className='sub'>Ayuda a la web dandole like a nuestras redes sociales</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewItem;
