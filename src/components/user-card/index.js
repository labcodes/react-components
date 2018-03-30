import React from 'react';

const UserCard = ({ toggleClick }) => {
    return(
        <div>
            <h1>It Works!</h1>
            {
                toggleClick
                ? <button onClick={() => toggleClick()}>works</button>
                : null
            }
        </div>
)};

export default UserCard;