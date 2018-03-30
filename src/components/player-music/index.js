import React from 'react';
import PropTypes from 'prop-types';

// ====

const PlayerMusic = ({ toggleClick }) => (
    <div>
        <h1>It Works!</h1>
        {
            toggleClick
            ? <button onClick={() => toggleClick()}>
                works
            </button>
            : null
        }
    </div>

);

// ====

PlayerMusic.propTypes = {
    toggleClick: PropTypes.func
};

// ====

PlayerMusic.defaultProps = {
    toggleClick: null
};

// ====

export default PlayerMusic;