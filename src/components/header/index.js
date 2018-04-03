import React from 'react';
import PropTypes from 'prop-types';

import './header.scss'

// ====

const Header = ({ userPhoto, userName, usersList, handleOnChange, handleClick}) => {
    let selectComponent = null;
    let logoutButton = null;
    
    const hasUserList = usersList && usersList.length > 0;

    if (hasUserList && handleOnChange) {
        selectComponent = (
            <select className='header-select' onChange={(evt) => handleOnChange(evt)}>
                {usersList.map(({ id, name }) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
        );
    }

    if (handleClick) {
        logoutButton = (
            <button className='logout-button' onClick={() => handleClick()}>
                logout
            </button>
        );
    }

    return (
        <header className='header-primary'>
            <div className='header-box first'>
                <figure className='header-user-photo'>
                    <img src={userPhoto} alt={userName} />
                </figure>
            </div>

            <div className='header-box second'>
                {selectComponent}
            </div>

            <div className='header-box third'>
                {logoutButton}
            </div>
        </header>
    )
};

// ====

Header.propTypes = {
    userPhoto: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    usersList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    ).isRequired,
    handleClick: PropTypes.func,
    handleOnChange: PropTypes.func
};

// ====

Header.defaultProps = {
    userPhoto: '',
    userName: '',
    usersList: [],
    handleClick: null,
    handleOnChange: null
};

// ====

export default Header;