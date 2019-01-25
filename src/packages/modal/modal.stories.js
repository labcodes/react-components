import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, button } from '@storybook/addon-knobs/react';

import Modal from './index';

// ====

const ModalObj = {
  active: true,
  content: 'Here is my modal content!',
  handleClose: () => action('Close')(),
  handleSubmit: () => action('Submit')(),
  handleCancel: () => action('Cancel')(),
};

// ====

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

// ====

stories.add('complete version', withInfo()(() =>
  <Modal
    active={boolean('Active', ModalObj.active)}
    content={text('Content', ModalObj.content)}
    handleClose={ModalObj.handleClose}
    handleSubmit={ModalObj.handleSubmit}
    handleCancel={ModalObj.handleCancel}
  />
));