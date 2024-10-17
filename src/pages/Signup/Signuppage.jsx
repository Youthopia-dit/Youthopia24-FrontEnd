import React, { useState } from "react";
import "./Signuppage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";
import { useNavigate } from "react-router-dom";

function Signuppage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://youthopia24-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup Successful!");
        console.log(data); 
        navigate("/loginpage"); 
      } else {
        alert(data.message || "Signup failed, please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Server error, please try again later.");
    }
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
          <h2> Welcome </h2>
          <h3> Sign up to continue </h3>
          <form onSubmit={handleSubmit}>
            <input id="text" type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input id="text" type="email" name="email" placeholder="E-mail" onChange={handleChange} />
            <input id="text" type="password" name="password" placeholder="Password" onChange={handleChange} />
            <input id="text" type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
            <button type="submit" id="Next">Next</button>
          </form>
        </div>

      </div>
    </>
  );
}

export default Signuppage;
