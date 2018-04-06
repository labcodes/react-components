import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

// ====

const Header = ({ userPhoto, userName, handleLogoutClick, select: Component, selectOptions, selectMainUser, handleClickUser }) => {
    let logoutButton = null;
    let selectComponent = null;

    if (Component) {
        selectComponent = (
            <Component 
                usersList={selectOptions}
                mainUser={selectMainUser}
                handleClickUser={handleClickUser}
            />
        );
    }

    if (handleLogoutClick) {
        logoutButton = (
            <button className='logout-button' onClick={() => handleLogoutClick()}>
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
    selectMainUser: PropTypes.string.isRequired,
    selectOptions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    ).isRequired,
    handleLogoutClick: PropTypes.func,
    handleClickUser: PropTypes.func,
    select: PropTypes.func
};

// ====

Header.defaultProps = {
    userPhoto: '',
    userName: '',
    selectMainUser: 'string',
    selectOptions: [],
    handleLogoutClick: null,
    handleClickUser: null,
    select: null
};

// ====

export default Header;