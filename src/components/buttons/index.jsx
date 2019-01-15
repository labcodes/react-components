import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
  outline: none;
  border: none;
  appearance: none;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
`;

const CloseButton = styled(ButtonBase)`
  width: auto;
  height: 16px;
`;

const BackButton = styled(CloseButton)`
`;

const SaveButton = styled(ButtonBase)`
  background-color: ${props => props.inverted ? `#FFFFFF` : `#00A7AC`};
  color: ${props => props.inverted ? `#00A7AC` : `#FFFFFF`};
  padding: 12px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 600;

  transition: opacity .25s linear 0s;

  &:hover {
    opacity: .7;
  }
`;

const RemoveButton = styled(ButtonBase)`
  color: #F05B55;
  font-weight: 600;
  font-size: 14px;
  padding: 12px;
  display: flex;
  width: 100%;
  justify-content: center;

  transition: opacity .25s linear 0s;

  &:hover {
    opacity: .7;
  }
`;

export {
  CloseButton, BackButton, SaveButton, RemoveButton,
};