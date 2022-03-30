import React, {useEffect, useMemo, useState} from 'react';
import _ from 'lodash';
import Helmet from 'react-helmet';
import {useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {formatUrlImage} from 'src/utilities/util';

const MetaTag = () => {
    const location = useLocation();
    const domain = useSelector((state) => state.init.domain);
    const metadata = useSelector((state) => state.metadata);

    const [url, setUrl] = useState(metadata.metadata_url);

    useEffect(() => {
        setUrl(window.location.href);
    }, [location]);

    return useMemo(() => {
        const img = formatUrlImage(metadata.metadata_image_url, 700);
        return (
            <Helmet>
                <title>
                    {metadata.metadata_title}
                    {metadata.metadata_title && ` - [Website]`}
                </title>
                {metadata.metadata_disable === 1 && <meta name='robots' content='noindex, nofollow' />}
                {metadata.metadata_disable === 1 && <meta name='googlebot' content='noindex, nofollow' />}
                <meta name='description' content={metadata.metadata_description} />
                <meta name='keywords' content={metadata.metadata_keywords} />
                <meta property='og:site_name' content={domain} />
                <meta property='og:locale' content='en_US' />
                <meta property='og:type' content='website' />
                <meta
                    property='og:title'
                    content={metadata.metadata_title_og ? metadata.metadata_title_og : metadata.metadata_title}
                />
                <meta
                    property='og:description'
                    content={
                        metadata.metadata_description_og
                            ? metadata.metadata_description_og
                            : metadata.metadata_description
                    }
                />
                <meta property='og:url' content={url} />
                <meta property='article:tag' content={metadata.metadata_keywords} />
                <meta property='og:image' content={img} />
                <meta property='og:image:secure_url' content={img} />
                <meta itemProp='name' content={metadata.metadata_title} />
                <meta itemProp='description' content={metadata.metadata_description} />
                <meta itemProp='image' content={img} />
                <meta name='twitter:card' content='summary' />
                <meta name='twitter:site' content={`@${domain}`} />
                <meta name='twitter:title' content={metadata.metadata_title} />
                <meta name='twitter:description' content={metadata.metadata_description} />
                <meta name='twitter:image' content={img} />
            </Helmet>
        );
    }, [metadata, url]);
};
export default MetaTag;
