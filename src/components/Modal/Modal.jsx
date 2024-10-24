import React from 'react';
import './Modal.css';

function Modal(props) {
  return (
    <>
      <div className="modal-background">
        <div className="modal">
          <button className="modal-close-button">close</button>
          <p>{console.log(props.data)}</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
