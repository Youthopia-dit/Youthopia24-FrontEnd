import React from "react";
import "./Loginpage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";

function Loginpage1() {
  return (
    <>
      <div className="main">
        <div class="background">
          <img src={bg1} alt="bg-page" id="ab" />
        </div>
       
         
        
        <div class="bordernp">
        <div>
            <img src={youthopia_logo} alt="logo" id="logo" />
          </div>
          <h2> Let's get Started </h2>
          <form>
            <div>
              <p>
                <input
                  id="Login"
                  type="button"
                  name="button"
                  value="Login to Existing Account"
                  
                />
              </p>
              <p>
                <input
                  id="Login"
                  type="button" 
                  name="button"
                  value="Create a New Account"
                  
                />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Loginpage1;