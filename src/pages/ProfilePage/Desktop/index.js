import './styles.scss';

import React from 'react';

import Avatar from '../Avatar';

import ProfileHorizontalList from 'src/partials/ProfileHorizonralList';

const ProfilePageDesktop = () => {
    return (
        <div className='profile-page-desktop'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <Avatar />
                    </div>
                    <div className='col-9'>
                        <ProfileHorizontalList title='Animes favoritos' icon='heart' />
                        <ProfileHorizontalList title='Animes que veo' icon='play' />
                        <ProfileHorizontalList title='Animes que pienso ver' icon='bookmark' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePageDesktop;
