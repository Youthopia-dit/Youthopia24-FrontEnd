import React from "react";
import "./Signuppage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";

function Signifyes() {
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
          <p class="notb">Just a liitle more left</p>
          <form>
            <div>
              <p>
                <input
                  id="text"
                  type="text"
                  name="name"
                  placeholder="Year:"
                />
              </p>
              <p>
                <input
                  id="text"
                  type="text"
                  name="Branch"
                  placeholder="Branch:"
                />
              </p>
              <p>
                <input
                  id="text"
                  type="password" 
                  name="SapId"
                  placeholder=" Sap ID:"
                  
                />
              </p>
             
              <p >
                <input
                  id="Next"
                  class="button"
                  type="submit"
                  value="SUBMIT"
                 
                ></input>
              </p>
            </div>
          </form>
        </div>
       
      </div>
    </>
  );
}

export default Signifyes;
