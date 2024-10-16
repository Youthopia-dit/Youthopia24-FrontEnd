import React from "react";
import "./Loginpage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";

function Loginpage() {
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
          <h2> Welcome </h2>
          <h3>Login to continue</h3>
          <form>
            <div>
              <p>
                <input
                  id="button"
                  type="email"
                  name="email"
                  placeholder="  E-mail :"
                />
              </p>
              <p>
                <input
                  id="button"
                  type="password" 
                  name="password"
                  placeholder="  Password :"
                  
                />
              </p>
              <p >
                <input
                  id="Next"
                  class="button"
                  type="submit"
                  value="NEXT"
                 
                ></input>
              </p>
            </div>
          </form>
        </div>
       
      </div>
    </>
  );
}

export default Loginpage;
