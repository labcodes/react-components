import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';

import Header from './index';

// ====

const HeaderObj = {
    userName: 'Thulio Philipe',
    userPhoto: 'https://avatars1.githubusercontent.com/u/2343288?s=460&v=4',
    usersList: [
        { id: 1, name: 'User 01' },
        { id: 2, name: 'User 02' },
    ]
};

storiesOf('Header', module)
    .add('empty', () => (
        <Header />
    ))
    .add('with userPhoto', () => (
        <Header 
            userPhoto={HeaderObj.userPhoto}
            userName={HeaderObj.userName}
        />
    ))
    .add('with usersList', () => (
        <Header 
            usersList={HeaderObj.usersList}
            handleOnChange={(evt) => action('On change!')(evt)}
        />
    ))
    .add('with logout button', () => (
        <Header handleClick={action('Logout')} />
    ))
    .add('complete version', () => (
        <Header 
            userPhoto='http://i.pravatar.cc/300'
            userName='Chuck Norris'
            usersList={HeaderObj.usersList}
            handleOnChange={(evt) => action('On change!')(evt)}
            handleClick={action('Logout')}
        />
    ))