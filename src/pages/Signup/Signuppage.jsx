import React from "react";
import "./Signuppage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";

function Signuppage() {
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
          <h2> Welcome </h2>
          <p class="notb">Sign up to continue</p>
          <form>
            <div>
              <p>
                <input
                  id="text"
                  type="text"
                  name="name"
                  placeholder="Name:"
                />
              </p>
              <p>
                <input
                  id="text"
                  type="email"
                  name="email"
                  placeholder="  E-mail :"
                />
              </p>
              <p>
                <input
                  id="text"
                  type="password" 
                  name="password"
                  placeholder="  Password :"
                  
                />
              </p>
              <p>
                <input
                  id="text"
                  type="password" 
                  name="password"
                  placeholder=" Confirm Password :"
                  
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

export default Signuppage;
