import React, { useState } from "react";
import "./Loginpage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://youthopia24-backend.onrender.com/loginpage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login Successful!");
        console.log(data); 
        navigate("/");
      } else {
        alert(data.message || "Login failed, please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Server error, please try again later.");
    }
  };

  return (
    <>
      <div className="main">
        <div class="background">
          <img src={bg1} alt="bg-page" className="bgimage" />
        </div>
        <div class="bordernp">
          <div>
            <img src={youthopia_logo} alt="logo" id="logo" />
          </div>
          <h2> Welcome </h2>
          <h3>Login to continue</h3>
          <form onSubmit={handleLogin}>
            <input
              id="button"
              type="email"
              name="email"
              placeholder="E-mail:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              id="button"
              type="password"
              name="password"
              placeholder="Password:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button id="Next" className="button" type="submit">
              NEXT
            </button>
          </form>
        </div>

      </div>
    </>
  );
}

export default Loginpage;
