import React from 'react';
import PropTypes from 'prop-types';

import './select.scss';

// ====

class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainUser: '',
        };

        this.setContainerAsActive = this.setContainerAsActive.bind(this);
        this.changeMainUser = this.changeMainUser.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.mainUser === prevState.mainUser) {
            return null;
        }

        return nextProps;
    }

    setContainerAsActive(element) {
        return element.classList.toggle('is-active');
    }

    changeMainUser(newUser) {
        const { handleClickUser } = this.props;

        this.setState({
            mainUser: newUser
        });

        handleClickUser(newUser);
    }

    render() {
        const { usersList } = this.props;
        const { mainUser } = this.state;

        let listComponent = null;
        const hasUserList = usersList && usersList.length > 0;

        if (hasUserList) {
            listComponent = usersList.map((el) => (
                <li key={el.id} className='select-list-item' onClick={() => this.changeMainUser(el.name)}>
                    {el.name}
                </li>)
            );
        }

        return (
            <div className='select-wrapper' onClick={(evt) => this.setContainerAsActive(evt.currentTarget)}>
                <span className='select-main-user'>
                    {mainUser}
                </span>

                <ul className='select-list'>
                    {listComponent}
                </ul>
            </div>
        )
    }
};

// ====

Select.propTypes = {
    mainUser: PropTypes.string.isRequired,
    usersList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    ).isRequired,
    handleClickUser: PropTypes.func
};

// ====

Select.defaultProps = {
    mainUser: '',
    usersList: [],
    handleClickUser: null
};

// ====

export default Select;