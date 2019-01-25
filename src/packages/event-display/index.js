import React from 'react';
import PropTypes from 'prop-types';

import './event-display.scss';

// ====

const EventDisplay = ({title, type, users, period}) => {
    return (
        <aside className='event-display-wrapper'>
            <div className='event-display-box'>
                <h3 className='event-display-title'>
                    {title}
                    <span className={type}>{type}</span>
                </h3>
                
                <ul className='event-display-list'>
                    {users.map(((el, idx) => (
                        <li className='event-display-item' key={idx}>
                            <figure>
                                <img src={el.img} alt={el.name} />
                            </figure>
                        </li>
                    )))}
                </ul>
            </div>

            <div className='event-display-box'>
                <h4 className='event-display-period'>
                    {period}
                </h4>
            </div>
        </aside>
    );
};

// ====

EventDisplay.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    period: PropTypes.string.isRequired,
};

// ====

EventDisplay.defaultProps = {
    title: '',
    type: '',
    users: [],
    period: ''
};

// ====

export default EventDisplay;