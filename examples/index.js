import React from 'react';
import { render } from 'react-dom';

import NewModal from '../dist/new-modal';

const App = () => (
  <NewModal isActive={true}>HELLO my friend!</NewModal>
);

render(<App />, document.querySelector('#root'));