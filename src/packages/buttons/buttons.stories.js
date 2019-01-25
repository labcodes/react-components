import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';

import { CloseIcon, BackIcon } from '../icons';
import { CloseButton, BackButton, SaveButton, RemoveButton } from './index';

const stories = storiesOf('Buttons', module);
stories.addDecorator(withKnobs);

stories.add('CloseButton', () => (
  <CloseButton>
    <CloseIcon />
  </CloseButton>
));

stories.add('BackButton', () => (
  <BackButton>
    <BackIcon />
  </BackButton>
));

stories.add('SaveButton', () => (
  <SaveButton
    inverted={boolean('inverted', false)}>
    {text('', 'Button label')}
  </SaveButton>
));

stories.add('RemoveButton', () => (
  <RemoveButton>
    {text('', 'Button label')}
  </RemoveButton>
));

