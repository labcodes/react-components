import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';

import NewModal from './index';

const stories = storiesOf('New Modal', module);
stories.addDecorator(withKnobs);

stories.add('complete version', () => (
  <NewModal
    isActive={boolean('isActive', true)}
    showInput={boolean('showInput', true)}
    modalTitle={text('modalTitle', 'Criar evento')}
    saveLabel={text('saveLabel', 'Salvar')}
    removeLabel={text('removeLabel', 'Remover evento')}
    handleClose={(evt) => action('handleClose')(evt)}
    handleSave={(evt) => action('handleSave')(evt)}
    handleRemove={(evt) => action('handleRemove')(evt)}
    handleBack={(evt) => action('handleBack')(evt)}
    handleInputChange={(evt) => action('handleInputChange')(evt.target.value)}
  >
    <h1>YO!</h1>
    <h2>Here is my modal content</h2>
  </NewModal>
));