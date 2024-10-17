import React from "react";
import "./Signuppage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";

function Signupq() {
  return (
    <>
      <div className="main">
        <div class="backg">
          <img src={bg1} alt="bg-page" id="ab" />
          </div>
        <div class="border">
          <div>
            <img src={youthopia_logo} alt="logo" id="log" />
          </div>
          <h3>Just a few details to get started</h3>
          <h2>Are you a DIT student?</h2>
          <form>
            <div>
            <p>
                <input
                  id="Login"
                  type="button"
                  name="button"
                  value="Yes"
                  
                />
              </p>
              <p>
                <input
                  id="Login"
                  type="button" 
                  name="button"
                  value="No"
                  
                />
              </p>
            </div>
          </form>
        </div>
       
      </div>
    </>
  );
}

export default Signupq;