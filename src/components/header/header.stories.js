import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';

import Header from './index';
import SelectComponent from '../select';

// ====

const HeaderObj = {
    userName: 'Chuck Norris',
    userPhoto: 'http://i.pravatar.cc/300',
    selectOptions: [
        { id: 1, name: 'User 01' },
        { id: 2, name: 'User 02' },
    ],
    select: SelectComponent,
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
    .add('with a select component', () => (
        <WithNotes notes={'It is using the select component with options, main user and handleClick as properties.'}>
            <Header 
                select={HeaderObj.select}
                selectOptions={HeaderObj.selectOptions}
                selectMainUser={HeaderObj.userName}
                handleClickUser={(user) => action('User')(user)}
            />
        </WithNotes>
    ))
    .add('with logout button', () => (
        <Header handleLogoutClick={action('Logout')} />
    ))
    .add('complete version', () => (
        <Header 
            userName={HeaderObj.userName}
            userPhoto={HeaderObj.userPhoto}
            select={HeaderObj.select}
            selectOptions={HeaderObj.selectOptions}
            selectMainUser={HeaderObj.userName}
            handleClickUser={(user) => action('User')(user)}
            handleLogoutClick={action('Logout')}
        />
    ))