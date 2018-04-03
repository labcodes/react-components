import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';

import Select from './index';

// ====

const SelectObj = {
    mainUser: 'Thulio Philipe',
    usersList: [
        { id: 1, user: 'User 01' },
        { id: 2, user: 'User 02' },
        { id: 3, user: 'User 03' },
    ]
};

storiesOf('Select', module)
    .add('empty', () => (
        <Select />
    ))
    .add('with mainUser', () => (
        <Select mainUser={SelectObj.mainUser} />
    ))
    .add('with usersList', () => (
        <Select usersList={SelectObj.usersList} />
    ))
    .add('complete version', () => (
        <Select 
            mainUser={SelectObj.mainUser}
            usersList={SelectObj.usersList}
            handleClickUser={(obj) => action('User Clicked:')(obj)}
        />
    ))