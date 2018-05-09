import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select, array } from '@storybook/addon-knobs/react';

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

// ====

const stories = storiesOf('Header', module);
stories.addDecorator(withKnobs);

// ====

stories.add('complete version', withInfo()(() =>
    <Header
        userName={text('User Name', HeaderObj.userName)}
        userPhoto={text('User Photo', HeaderObj.userPhoto)}
        selectMainUser={text('Main User', HeaderObj.userName)}
        select={HeaderObj.select}
        selectOptions={HeaderObj.selectOptions}
        handleClickUser={(user) => action('User')(user)}
        handleLogoutClick={action('Logout')}
    />
));