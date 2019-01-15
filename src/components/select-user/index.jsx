import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import truncate from 'lodash/truncate';
import { CloseIcon } from '../icons';


const Wrapper = styled.div`
`;

const Base = styled.div`
    flex: 1 1 30%;
`;

const UserImage = styled(Base)`
    text-align: left;
`;

const UserName = styled(Base)`
    text-align: center;
`;

const SelectButton = styled(Base)`
    text-align: right;
`;

const PlusIcon = styled(CloseIcon)`
    transform: rotate(45deg);
    fill: #00a7ac;
`;

const SelectUser = ({
    isSelected, userId, userName, photoUrl, handleClick
  }) => {
    return (
     <Wrapper onClick={handleClick}>
        <UserImage>
            <figure className='user-photo'>
                <img src={photoUrl} alt={userName} />
            </figure>
        </UserImage>

        <UserName>
            {userName}
        </UserName>

        <SelectButton>
            {isSelected ? <CloseIcon /> : <PlusIcon />}
        </SelectButton>
     </Wrapper>
    )
  };
  
  SelectUser.propTypes = {
    isSelected: PropTypes.bool,
    handleClick: PropTypes.func,
    userId: PropTypes.string,
    userName: PropTypes.string,
    photoUrl: PropTypes.string,
  };
  
  SelectUser.defaultProps = {
    isSelected: false,
    handleClick: null,
    userId: '0',
    userName: '',
    photoUrl: ''
  };
  
  export default SelectUser;