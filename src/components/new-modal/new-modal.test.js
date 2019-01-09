import React from 'react';
import { shallow } from 'enzyme';

import NewModal from './index';

describe('New Modal', () => {
  test('Should call handleClose when it was clicked.', () => {
    const onClose = jest.fn();

    const component = shallow(
      <NewModal
        handleClose={onClose}
      >
        <h1>DALE</h1>
      </NewModal>
    );

    // const spyClose = jest.spyOn(component.instance(), 'onClick');

    console.warn({ component }, component.instance());

    // console.warn(component.find('header > button:first'))
  });
});