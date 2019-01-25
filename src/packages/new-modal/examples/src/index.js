import React from 'react';
import { render} from 'react-dom';

import NewModal from '../../src';

const App = () => (
  <NewModal isActive={true} modalTitle="Modal Title">
    <h1>Here's my content :)</h1>
  </NewModal>
);

render(<App />, document.getElementById('root'));