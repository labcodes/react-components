import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

// ====

const Modal = ({ handleSubmit, handleCancel, handleClose, content, active }) => {
  let modalWrapperClass = 'modal-wrapper';
  let modalBackgroundClass = 'modal-background';

  if (active) {
    modalWrapperClass += ' js-active';
    modalBackgroundClass += ' js-active';
  }

  return(
    <aside className={modalWrapperClass}>
      <div className={modalBackgroundClass}></div>

      <div className="modal">
        <header className="modal-header">
          <button className="modal-close" onClick={handleClose} title='Click to Close'>
            x
          </button>
        </header>

        <section className="modal-body">
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </section>

        <footer className="modal-actions">
          <button onClick={handleCancel} className='btn-default inverted'>
            Cancel
          </button>

          <button onClick={handleSubmit} className='btn-default'>
            Submit
          </button>
        </footer>
      </div>
    </aside>
  )
};

// ====

Modal.propTypes = {
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
  handleClose: PropTypes.func,
  content: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

// ====

Modal.defaultProps = {
  content: '',
  active: false
};

// ====

export default Modal;