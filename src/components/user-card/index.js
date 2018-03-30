import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

// ====

const UserCard = ({ userName, photoUrl, amount, status, handleClick }) => (
    <article style={styles.cardWrapper} onClick={() => handleClick()}>
        <figure style={styles.cardImage}>
            <img src={photoUrl} alt={userName} style={styles.cardImage.img} />
        </figure>

        <aside style={styles.userInfo}>
            <div style={styles.box.info}>
                <h1 style={styles.title}>{userName}</h1>
                <h3 style={styles.subtitle}>{amount}</h3>
            </div>

            <div style={styles.box.status}>
                <span style={styles.status.type[status]}>{status}</span>
            </div>
        </aside>
    </article>
);

// ====

UserCard.propTypes = {
    userName: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

// ====

UserCard.defaultProps = {
    userName: '',
    photoUrl: '',
    amount: '',
    status: '',
    handleClick: null
};

// ====

export default UserCard;