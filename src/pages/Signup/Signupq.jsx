import React from 'react';
import './Signuppage.css';
import bg1 from '../../assets/bg1.png';
import youthopia_logo from '../../assets/youthopia-logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

function Signupq() {
  const navigate = useNavigate();
  const location = useLocation();

  const formData = location.state;

  const handleNavigation = (userType) => {
    let data = {...formData};
    if (userType === 'DIT') {
      data = { ...data, 'college' : 'DIT University' };
    } else {
      data = { ...data, 'college' : '' };
    }
    navigate('/signup-second', { state: data });
  };

  return (
    <>
      <div className="main">
        <div className="background">
          <img src={bg1} alt="bg-page" />
        </div>
        <div className="bordernp">
          <div>
            <img src={youthopia_logo} alt="logo" id="logo" />
          </div>
          <h2>Just a few details to get started</h2>
          <h1 className="Dit"> Are you a DIT student ?</h1>
          <form>
            <div>
              <p>
                <button id="Login" onClick={() => handleNavigation('DIT')} type="button">
                  Yes
                </button>
              </p>
              <p>
                <button id="Login" onClick={() => handleNavigation('Non-DIT')} type="button">
                  No
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signupq;
