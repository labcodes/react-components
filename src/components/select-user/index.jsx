import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import truncate from 'lodash/truncate';
import { CloseIcon } from '../icons';


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    min-width: 350px;
`;

const UserImage = styled.div`
    flex: 1 1 30%;
    text-align: left;
`;

const UserPhoto = styled.figure`
    width: 35px;
    height: 35px;
    border-radius: 100%;
    overflow: hidden;

    img {
        max-width: 100%;
    }
`;

const UserName = styled.div`
    flex: 1 1 30%;
    text-align: center;
`;

const SelectButton = styled.div`
    flex: 1 1 30%;
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
            <UserPhoto>
                <img src={photoUrl} alt={userName} />
            </UserPhoto>
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