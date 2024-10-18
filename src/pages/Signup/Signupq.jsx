import React from "react";
import "./Signuppage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";
import { useNavigate } from "react-router-dom";

function Signupq() {
  const navigate = useNavigate();

  const handleNavigation = (userType) => {
    if (userType === "DIT") {
      navigate("/signup/dit");
    } else {
      navigate("/signup/non-dit");
    }
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
                <button id="Login" onClick={() => handleNavigation("DIT")}>Yes</button>
              </p>
              <p>
                <button id="Login" onClick={() => handleNavigation("Non-DIT")}>No</button>
              </p>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default Signupq;