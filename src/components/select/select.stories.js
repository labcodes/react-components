import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array } from '@storybook/addon-knobs/react';

import Select from './index';

// ====

const SelectObj = {
    mainUser: 'Chuck Norris',
    usersList: [
        { id: 1, name: 'User 01' },
        { id: 2, name: 'User 02' },
        { id: 3, name: 'User 03' },
    ],
};

// ====

const stories = storiesOf('Select', module);
stories.addDecorator(withKnobs);

// ====

stories.add('complete version', withInfo()(() =>
    <Select
        mainUser={text('Main user', SelectObj.mainUser)}
        usersList={array('Users list', SelectObj.usersList)}
        handleClickUser={(user) => action('User')(user)}
    />
));
