import './styles.scss';

import React from 'react';

import Avatar from '../Avatar';

import ProfileHorizontalList from 'src/partials/ProfileHorizonralList';

const ProfilePageMobile = () => {
    return (
        <div className='profile-page-mobile'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Avatar />
                        <ProfileHorizontalList title='Animes favoritos' icon='heart' />
                        <ProfileHorizontalList title='Animes que veo' icon='play' />
                        <ProfileHorizontalList title='Animes que pienso ver' icon='bookmark' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePageMobile;
