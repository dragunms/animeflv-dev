import './styles.scss';

import React from 'react';

const VideoPlayer = () => {
    return (
        <div className='video-player-container'>
            <div className='video-player-iframe'>
                <iframe
                    width='100%'
                    height="auto"
                    src='https://www.youtube.com/embed/lZqbgn3SvmU'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='content'
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
