import './styles.scss';

import React from 'react';
import {DiscussionEmbed} from 'disqus-react';

const DisqusComment = () => {
    return (
        <div className='disqus-comment'>
            <div className='top'>
                <h3 className='title'>Comentarios</h3>
            </div>
            <DiscussionEmbed
                shortname='example'
                config={{
                    url: '',
                    identifier: '1',
                    title: 'asd',
                    language: 'en_US',
                }}
            />
        </div>
    );
};

export default DisqusComment;
