import React, { useState } from "react";
import "./Signuppage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";
import { useNavigate } from "react-router-dom";

function Signifno() {
  const [formdata, setFormData] = useState({
    collegeName: "",
    year: "",
    branch: "",
    governmentId: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Non-Dit Signup Data:", formData);
    alert("Non-Dit Signup Complete!");
    navigate("/");
  };

  return (
    <>
      <div className="main">
        <div class="background">
          <img src={bg1} alt="bg-page" />
        </div>
        <div class="bordernp">
          <div>
            <img src={youthopia_logo} alt="logo" id="logo" />
          </div>
          <h2 className="sign_no">Non DITian</h2>
          <form>
            <input
              id="text"
              type="text"
              name="collegeName"
              placeholder="College Name"
              onChange={handleChange}
            />
            <input
              id="text"
              type="text"
              name="year"
              placeholder="Year"
              onChange={handleChange}
            />
            <input
              id="text"
              type="text"
              name="branch"
              placeholder="Branch"
              onChange={handleChange}
            />
            <input
              id="text"
              type="text"
              name="governmentId"
              placeholder="Government ID (Aadhar/DL)"
              onChange={handleChange}
            />
            <button type="submit" id="Next" className="button">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signifno;