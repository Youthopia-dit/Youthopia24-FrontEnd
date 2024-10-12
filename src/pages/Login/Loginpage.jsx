import React from "react";
import "./Loginpage.css";
import ab from "../../assets/ab.png";
import youthopia_logo from "../../assets/youthopia-logo.png";

function Loginpage() {
  return (
    <>
      <div className="main">
        <div class="background">
          <img src={ab} alt="bg-page" id="ab" />
        </div>
       
          <div>
            <img src={youthopia_logo} alt="logo" id="logo" />
          </div>
        
        <div class="bordernp">
          <h1> Welcome Back </h1>
          <h3>Login to continue</h3>
          <form>
            <div>
              <p>
                <input
                  id="button"
                  type="text"
                  name="username"
                  placeholder="  Name :"
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
              <div class="remem">
                <a href="#sigin">
                  Sign in
                </a>
                <a href="#sigin">forgot password</a>
              </div>

              <p class="Login">
                <input
                  id="button"
                  class="button"
                  type="button"
                  value="Login"
                  class="h"
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
