import React, { useState } from "react";
import "./Signuppage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";
import { useNavigate } from "react-router-dom";

function Signifyes() {
  const [formData, setFormData] = useState({ ditId: "", course: "", year: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DIT Signup Data:", formData);
    alert("DIT Signup Complete!");
    navigate("/");
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
          <h2 className="sign_yes">Just a little more left</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <p>
                <input
                  id="text"
                  type="text"
                  name="ditId"
                  placeholder="DIT ID"
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  id="text"
                  type="text"
                  name="course"
                  placeholder="Course"
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  id="text"
                  type="text"
                  name="year"
                  placeholder="Year"
                  onChange={handleChange}
                />
              </p>
            </div>



            <button type="submit" id="Next" className="button">Submit</button>
          </form>
        </div>

      </div>
    </>
  );
}

export default Signifyes;
