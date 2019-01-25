import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
  outline: none;
  border: none;
  appearance: none;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  font-weight: 600;
  padding: 12px;
  font-size: 14px;
`;

const CloseButton = styled(ButtonBase)`
  width: auto;
`;

const BackButton = styled(CloseButton)`
`;

const SaveButton = styled(ButtonBase)`
  background-color: ${props => props.inverted ? `#FFFFFF` : `#00A7AC`};
  color: ${props => props.inverted ? `#00A7AC` : `#FFFFFF`};
  border-radius: 5px;

  transition: opacity .25s linear 0s;

  &:hover {
    opacity: .7;
  }
`;

const RemoveButton = styled(ButtonBase)`
  color: #F05B55;
  transition: opacity .25s linear 0s;

  &:hover {
    opacity: .7;
  }
`;

export {
  CloseButton, BackButton, SaveButton, RemoveButton,
};