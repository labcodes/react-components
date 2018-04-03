import React from 'react';
import PropTypes from 'prop-types';

import './user-card.scss';

// ====

const UserCard = ({ userName, photoUrl, amount, status, handleClick }) => (
    <article className='card-wrapper' onClick={() => handleClick(userName)}>
        <figure className='card-image'>
            <img src={photoUrl} alt={userName} />
        </figure>

        <aside className='card-user-info'>
            <div className='card-box info'>
                <h1 className='card-box-title'>{userName}</h1>
                <h3 className='card-box-subtitle'>{amount}</h3>
            </div>

            <div className='card-box status'>
                <span className={`card-status-type ${status}`}>{status}</span>
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
    handleClick: () => {}
};

// ====

export default UserCard;