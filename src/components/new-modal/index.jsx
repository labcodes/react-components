import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import truncate from 'lodash/truncate';

import { CloseIcon, BackIcon } from '../icons';

const Wrapper = styled.section`
  transition: all .25s ease-in-out 0s;

  transform: translateY(${props => props.show ? `0px` : `-1000px`});
  visibility: ${props => props.show ? `visible` : `hidden`};
  opacity: ${props => props.show ? `1` : `0`};
`;

const ModalHeader = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid #F7F7F7;
`;

const ModalTitle = styled.h3`
  margin: 0;
  padding: 0;
  color: #4A4A4A;
  font-size: 20px;
  font-weight: 300;
`;

const ModalContent = styled.div`
  display: flex;
  padding: 20px 24px;
  justify-content: center;
  flex-flow: column;

  height: calc(100vh - 200px);
  background-color: pink;
`;

const ModalFooter = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px 24px;
`;

const SearchBox = styled.input.attrs({
  placeholder: 'Convidar',
  type: 'text',
})`
  color: #4A4A4A;
  font-size: 20px;
  font-weight: 300;

  border: none;
  outline: none;
  margin: 0;
  padding: 0;

  caret-color: #00A7AC;

  &::placeholder {
    color: #CCC;
  }
`;

const ButtonBase = styled.button`
  outline: none;
  border: none;
  appearance: none;
  cursor: pointer;
  padding: 0;
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

const NewModal = ({
  handleClose, modalTitle, handleSave, saveLabel,
  children, handleRemove, removeLabel, isActive,
  showInput, handleInputChange, handleBack
}) => {
  return (
    <Wrapper show={isActive}>
      <ModalHeader>
        <div>
          {!showInput && <CloseButton onClick={handleClose}><CloseIcon /></CloseButton>}
          {showInput && <BackButton onClick={handleBack}><BackIcon /></BackButton>}
        </div>

        <div>
          {!showInput && <ModalTitle>{truncate(modalTitle, { length: '25' })}</ModalTitle>}
          {showInput && <SearchBox onChange={handleInputChange} />}
        </div>

        <div>
          <SaveButton onClick={handleSave} inverted={false}>
            {saveLabel}
          </SaveButton>
        </div>
      </ModalHeader>

      <ModalContent>
        {children}
      </ModalContent>

      <ModalFooter>
        {removeLabel &&
          <button onClick={handleRemove}>{removeLabel}</button>
        }
      </ModalFooter>
    </Wrapper>
  )
};

NewModal.propTypes = {
  isActive: PropTypes.bool,
  showInput: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSave: PropTypes.func,
  handleRemove: PropTypes.func,
  handleBack: PropTypes.func,
  handleInputChange: PropTypes.func,
  modalTitle: PropTypes.string,
  saveLabel: PropTypes.string,
  removeLabel: PropTypes.string,
  children: PropTypes.node,
};

NewModal.defaultProps = {
  isActive: false,
  showInput: false,
  handleClose: null,
  handleSave: null,
  handleRemove: null,
  handleInputChange: null,
  handleBack: null,
  modalTitle: '',
  saveLabel: '',
  removeLabel: '',
  children: null,
};

export default NewModal;