import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';

import EventDisplay from './index';

// ====

const EventObj = {
    title: 'Event Title',
    type: {
        evento: 'evento',
        pessoal: 'pessoal',
        feriado: 'feriado'
    },
    users: [
        { id: 1, img: 'http://i.pravatar.cc/300', name: 'User 01' },
        { id: 2, img: 'http://i.pravatar.cc/300', name: 'User 02' },
        { id: 3, img: 'http://i.pravatar.cc/300', name: 'User 03' },
        { id: 4, img: 'http://i.pravatar.cc/300', name: 'User 04' },
    ],
    period: '13/03/2018'
};

storiesOf('Event Display', module)
    .add('empty', () => (
        <EventDisplay />
    ))
    .add('with title', () => (
        <EventDisplay title={EventObj.title} />
    ))
    .add('with event as a type', () => (
        <EventDisplay title={EventObj.title} type={EventObj.type.evento} />
    ))
    .add('with pessoal as a type', () => (
        <EventDisplay title={EventObj.title} type={EventObj.type.pessoal} />
    ))
    .add('with feriado as a type', () => (
        <EventDisplay title={EventObj.title} type={EventObj.type.feriado} />
    ))
    .add('with period', () => (
        <EventDisplay period={EventObj.period} />
    ))
    .add('with users', () => (
        <EventDisplay users={EventObj.users} />
    ))
    .add('complete version', () => (
        <EventDisplay 
            title={EventObj.title}
            type={EventObj.type.evento}
            period={EventObj.period}
            users={EventObj.users}
        />
    ))