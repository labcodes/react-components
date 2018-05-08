import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithNotes } from '@storybook/addon-notes';

import Modal from './index';

// ====

const ModalObj = {
  content: 'Here is my modal content!',
  handleClose: () => action('Close')(),
  handleSubmit: () => action('Submit')(),
  handleCancel: () => action('Cancel')(),
};

// ====

storiesOf('Modal', module)
  .add('empty', () => (
    <Modal />
  ))
  .add('with isActive', () => (
    <Modal active />
  ))
  .add('active with handleClose', () => (
    <Modal active handleClose={ModalObj.handleClose} />
  ))
  .add('active with handleSubmit', () => (
    <Modal active handleSubmit={ModalObj.handleSubmit} />
  ))
  .add('active with handleCancel', () => (
    <Modal active handleCancel={ModalObj.handleCancel} />
  ))
  .add('active with content', () => (
    <Modal active content={ModalObj.content} />
  ))
  .add('complete version', () => (
    <Modal
      active
      handleClose={ModalObj.handleClose}
      handleSubmit={ModalObj.handleSubmit}
      handleCancel={ModalObj.handleCancel}
      content={ModalObj.content}
    />
  ))
