import React from "react";
import "./Signuppage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";

function Signifno() {
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
          <p class="notb">Non DITian</p>
          <form>
            <div>
              <p>
                <input
                  id="text"
                  type="text"
                  name="name"
                  placeholder="College Name:"
                />
              </p>
              <p>
                <input
                  id="text"
                  type="text"
                  name="text"
                  placeholder=" Year:"
                />
              </p>
              <p>
                <input
                  id="text"
                  type="text" 
                  name="branch"
                  placeholder="  Branch :"
                  
                />
              </p>
              <p>
                <input
                  id="text"
                  type="password" 
                  name="password"
                  placeholder="Government ID (Aadhar/DL) :"
                  
                />
              </p>
              <p >
                <input
                  id="Next"
                  class="button"
                  type="submit"
                  value="Login"
                 
                ></input>
              </p>
            </div>
          </form>
        </div>
       
      </div>
    </>
  );
}

export default Signifno;