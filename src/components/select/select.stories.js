import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';

import Select from './index';

// ====

const SelectObj = {
    mainUser: 'Chuck Norris',
    usersList: [
        { id: 1, name: 'User 01' },
        { id: 2, name: 'User 02' },
        { id: 3, name: 'User 03' },
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
            handleClickUser={(user) => action('User')(user)}
        />
    ))