import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import truncate from 'lodash/truncate';
import { CloseIcon } from '../icons';


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-width: 350px;
    margin-bottom: 16px;
`;

const UserImage = styled.div`
    flex: 0;
    text-align: left;
`;

const UserPhoto = styled.figure`
    width: 32px;
    height: 32px;
    border-radius: 100%;
    overflow: hidden;
    margin: 0;

    img {
        max-width: 100%;
    }
`;

const UserName = styled.div`
    flex: 1 1 30%;
    padding: 6px 16px;
    text-align: left;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.3px;
    color: #4a4a4a;
`;

const SelectButton = styled.div`
    flex: 0;
    text-align: right;
    margin-top: 6px;
    padding: 8px;
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
            {isSelected
              ? <CloseIcon scale="0.5" strokeWidth="1px" />
              : <CloseIcon fill="#00a7ac" rotate="45deg" scale="0.4" strokeWidth="1px" />
            }
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
