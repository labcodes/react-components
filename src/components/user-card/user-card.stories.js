import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';

import UserCard from './index';

// ====

const userObj = {
    userName: 'Chuck Norris',
    photoUrl: 'http://i.pravatar.cc/300',
    amount: 'R$ 2.400,10'
};

storiesOf('UserCard', module)
    .add('empty', () => (
        <UserCard />
    ))
    .add('with username', () => (
        <UserCard userName={userObj.userName} />
    ))
    .add('with photoUrl', () => (
        <UserCard photoUrl={userObj.photoUrl} />
    ))
    .add('with amount', () => (
        <UserCard amount={userObj.amount} />
    ))
    .add('with status pending', () => (
        <UserCard status='pending' />
    ))
    .add('with status success', () => (
        <UserCard status='success' />
    ))
    .add('complete version', () => (
        <WithNotes notes={'It is the final version, with all the properties.'}>
            <UserCard 
                userName={userObj.userName}
                photoUrl={userObj.photoUrl}
                amount={userObj.amount}
                status='pending'
            />
        </WithNotes>
    ))
    .add('complete version with handleClick', () => (
        <WithNotes notes={'It has a handleClick props, to get some information about the clicked card.'}>
            <UserCard 
                userName={userObj.userName}
                photoUrl={userObj.photoUrl}
                amount={userObj.amount}
                status='pending'
                handleClick={(user) => action('It works!')(user)}
            />
        </WithNotes>
    ))