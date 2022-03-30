import './styles.scss';

import React from 'react';
import {FacebookMessengerShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from 'react-share';

const ShareButtonGroup = () => {
    // const [url, setUrl] = useState('');
    // useEffect(() => {
    //     setUrl(window.location.href);
    //     const timer = setTimeout(() => {
    //         if (window.FB) {
    //             window.FB.XFBML.parse();
    //         }
    //     }, 1000);
    //     return function cleanup() {
    //         clearTimeout(timer);
    //     };
    // }, []);

    return (
        <div className='share-button-group'>
            <div className='share-button'>
                <FacebookMessengerShareButton url=''>
                    <FacebookIcon size={24} round />
                </FacebookMessengerShareButton>
            </div>
            <div className='share-button'>
                <TwitterShareButton url=''>
                    <TwitterIcon size={24} round />
                </TwitterShareButton>
            </div>
        </div>
    );
};

export default ShareButtonGroup;
