import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

// ====

const Header = ({ userPhoto, userName, usersList, handleOnChange, handleClick}) => {
    let selectComponent = null;
    let logoutButton = null;
    
    const hasUserList = usersList && usersList.length > 0;

    if (hasUserList && handleOnChange) {
        selectComponent = (
            <select style={styles.select} onChange={(evt) => handleOnChange(evt)}>
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
            <button style={styles.logout} onClick={() => handleClick()}>
                logout
            </button>
        );
    }

    return (
        <header style={styles.header}>
            <div style={styles.box.first}>
                <figure style={styles.userPhoto}>
                    <img style={styles.userPhoto.img} src={userPhoto} alt={userName} />
                </figure>
            </div>

            <div style={styles.box.second}>
                {selectComponent}
            </div>

            <div style={styles.box.third}>
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