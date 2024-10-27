import React from 'react';
import './Modal.css';
import techBanner from '../../assets/technicalBanner.png';
import culBanner from '../../assets/culturalBanner.png';
import infoBanner from '../../assets/InformalBanner.png';

function Modal({ data, handelModal }) {
  let banner;
  if (data.eventDetails.eventCategory === 'tech') {
    banner = techBanner;
  }
  if (data.eventDetails.eventCategory === 'cul') {
    banner = culBanner;
  }
  if (data.eventDetails.eventCategory === 'inf') {
    banner = infoBanner;
  }

  return (
    <>
      <div className="modal-background">
        <div
          className="modal"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner}) `,
          }}
        >
          <button
            className="modal-close-button"
            onClick={() => handelModal(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#fff"
            >
              <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
            </svg>
          </button>
          <div className="modal-content-wrapper">
            <h2 className="modal-heading">
              Event Name - {data.eventDetails.eventName}
            </h2>
            <div className="event-desc-container">
              <p className="modal-desc">
                Event Category - {data.eventDetails.eventCategory}
              </p>
              <p className="modal-desc">Venue - {data.eventDetails.venue}</p>
              <p className="modal-desc">Team Name - {data.teamName}</p>
            </div>
            <div>
              <h3 className="member-heading">Members</h3>
              <div className="event-members">
                {data.members.map((el, i) => {
                  return (
                    <>
                      <div key={i} className="event-member">
                        <span className="member-no">Member {i + 1}</span>
                        <div>
                          <p className="event-member-name">
                            Name - {data.members[i].name}
                          </p>
                          <p className="event-member-collegeid">
                            College Id - {data.members[i].collegeId}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="download_buttons">
                <div className="recite_button">
                  <div className="download_button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z" />
                    </svg>
                    Download Recipt
                  </div>
                </div>
                <div className="ticket_button">
                  <div className="download_button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z" />
                    </svg>
                    Download Ticket
                  </div>
                </div>
                <div className="pass_button">
                  <div className="download_button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="M420-680q0-33 23.5-56.5T500-760q33 0 56.5 23.5T580-680q0 33-23.5 56.5T500-600q-33 0-56.5-23.5T420-680ZM500 0 320-180l60-80-60-80 60-85v-47q-54-32-87-86.5T260-680q0-100 70-170t170-70q100 0 170 70t70 170q0 67-33 121.5T620-472v352L500 0ZM340-680q0 56 34 98.5t86 56.5v125l-41 58 61 82-55 71 75 75 40-40v-371q52-14 86-56.5t34-98.5q0-66-47-113t-113-47q-66 0-113 47t-47 113Z" />
                    </svg>
                    Download Event Pass
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
