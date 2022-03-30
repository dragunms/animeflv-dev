import './style.scss';

import React from 'react';

const LazyImage = ({src, alt, className = '', width, height, itemProp = null}) => {
    return (
        <img
            src={src}
            loading='lazy'
            className={`lazy-image ${className}`}
            alt={alt}
            width={width}
            height={height}
            itemProp={itemProp}
        />
    );
};

export default LazyImage;
