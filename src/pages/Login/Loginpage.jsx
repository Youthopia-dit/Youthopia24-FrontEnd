import React, { useState } from "react";
import "./Loginpage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loginpage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://youthopia24-backend.onrender.com/login",
        credentials,
        { withCredentials: true } // Send cookies with the request
      );
      alert(response.data.message);
      localStorage.setItem("authToken", response.data.token); // Store token in localStorage
      navigate("/"); // Redirect to home
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <div className="main">
        <div className="background">
          <img src={bg1} alt="bg-page" className="bgimage" />
        </div>
        <div className="bordernp">
          <div>
            <img src={youthopia_logo} alt="logo" id="logo" />
          </div>
          <h2> Welcome </h2>
          <h3>Login to continue</h3>
          <form onSubmit={handleLogin}>
            <div>
              <p>
                <input
                  id="button"
                  type="email"
                  name="email"
                  placeholder="E-mail:"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input
                  id="button"
                  type="password"
                  name="password"
                  placeholder="Password:"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </p>
              <button id="Next" className="button" type="submit">
                NEXT
              </button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default Loginpage;
