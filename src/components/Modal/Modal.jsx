import React from 'react';
import './Modal.css';

function Modal({ data, handelModal }) {
  return (
    <>
      <div className="modal-background">
        <div className="modal">
          <button
            className="modal-close-button"
            onClick={() => {
              handelModal('');
              console.log(data);
            }}
          >
            close
          </button>
          <h2 className="modal-heading">
            Event Name - {data.eventDetails.eventName}
          </h2>
          <p className="modal-desc">
            Event Category - {data.eventDetails.eventCategory}
          </p>
          <p className="modal-desc">Venue - {data.eventDetails.venue}</p>
          <p className="modal-desc">Event ID - {data.eventDetails.eventID}</p>
          <img
            src={data.eventDetails.event_poster}
            alt=""
            className="modal-image"
          />
        </div>
      </div>
    </>
  );
}

export default Modal;
