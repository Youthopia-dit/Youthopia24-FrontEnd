import React from "react";
import "./Loginpage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";
import { useNavigate } from "react-router-dom";

function Loginpage1() {
  const navigate = useNavigate();

  return (
    <>
      <div className="main">
        <div className="background">
          <img src={bg1} alt="bg-page" id="ab" />
        </div>

        <div className="bordernp">
          <div>
            <img src={youthopia_logo} alt="logo" id="logo" />
          </div>
          <h2 className="start"> Let's get Started </h2>
          <form>
            <div>
              <p>
                <input
                  id="Login"
                  type="button"
                  name="button"
                  value="Login to Existing Account"
                  onClick={() => navigate("/loginpage")}

                />
              </p>
              <p>
                <input
                  id="Login"
                  type="button"
                  name="button"
                  value="Create a New Account"
                  onClick={() => navigate("/signup/question")}
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