import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';

import SelectUser from './index';

const stories = storiesOf('Select User', module);
stories.addDecorator(withKnobs);

const userObj = {
    id: 1,
    userName: 'King of cacimbinha',
    photoUrl: 'http://i.pravatar.cc/300'
};

stories.add('complete version', () => (
  <SelectUser
    isSelected={boolean('isSelected', true)}
    userId={text('User Id', userObj.id)}
    userName={text('User Name', userObj.userName)}
    photoUrl={text('User photo', userObj.photoUrl)}
    handleClick={(evt) => action('handleClick')(evt.target.value)}
  />
));