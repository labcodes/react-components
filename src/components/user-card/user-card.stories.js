import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';

import UserCard from './index';

// ====

storiesOf('UserCard', module)
    .add('no props', () => (
        <UserCard />
    ))
    .add('with toggleClick', () => {
        const toggleNotes = 'This toggleClick function, make the request to the API.';

        return (
            <WithNotes notes={toggleNotes}>
                <UserCard toggleClick={action('It works!')} />
            </WithNotes>
        )
    })