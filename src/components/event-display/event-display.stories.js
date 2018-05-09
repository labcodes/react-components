import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { withKnobs, text, select, array } from '@storybook/addon-knobs/react';

import EventDisplay from './index';

// ====

const EventObj = {
    title: 'Event Title',
    type: ['evento', 'pessoal', 'feriado'],
    users: [
        { id: 1, img: 'http://i.pravatar.cc/300', name: 'User 01' },
        { id: 2, img: 'http://i.pravatar.cc/300', name: 'User 02' },
        { id: 3, img: 'http://i.pravatar.cc/300', name: 'User 03' },
        { id: 4, img: 'http://i.pravatar.cc/300', name: 'User 04' },
    ],
    period: '13/03/2018'
};

// ====

const stories = storiesOf('EventDisplay', module);
stories.addDecorator(withKnobs);

// ====

stories.add('empty', () => <EventDisplay />);

stories.add('complete version', () => (
    <EventDisplay
        title={text('Title', EventObj.title)}
        type={select('Type', [...EventObj.type])}
        period={text('Period', EventObj.period)}
        users={array('Users', EventObj.users)}
    />
))