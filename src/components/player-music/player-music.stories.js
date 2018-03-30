import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';

import PlayerMusic from './index';

// ====

storiesOf('PlayerMusic', module)
    .add('no props', () => <PlayerMusic />)
    .add('with toggleClick', () => {
        const toggleNotes = 'This toggleClick function, make the request to the API.';

        return (
            <WithNotes notes={toggleNotes}>
                <PlayerMusic toggleClick={action('It works!')} />
            </WithNotes>
        )
    })