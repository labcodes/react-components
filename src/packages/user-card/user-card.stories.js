import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, array, select } from '@storybook/addon-knobs/react';

import UserCard from './index';

// ====

const userObj = {
    userName: 'Chuck Norris',
    photoUrl: 'http://i.pravatar.cc/300',
    amount: 'R$ 2.400,10',
    status: ['pending', 'success']
};

const componentNotes = 'It has a handleClick props, to get some information about the clicked card.';

// ====

const stories = storiesOf('UserCard', module);
stories.addDecorator(withKnobs);

// ====

stories.add('complete version', withInfo()(() =>
    <WithNotes notes={componentNotes}>
        <UserCard
            userName={text('User Name', userObj.userName)}
            photoUrl={text('User photo', userObj.photoUrl)}
            amount={text('Amount', userObj.amount)}
            status={select('Status', [...userObj.status], userObj.status[0])}
            handleClick={(user) => action('It works!')(user)}
        />
    </WithNotes>
));
