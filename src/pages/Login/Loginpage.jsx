import React, { useState } from "react";
import "./Loginpage.css";
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Loginpage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error"); // Can be "error", "success", etc.
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://youthopia24-backend.onrender.com/api/user/login",
        credentials
      );
      console.log(response.data.token);
      localStorage.setItem("authToken", response.data.token);
      navigate("/");
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      let message = "An unexpected error occurred. Please try again.";
      if (error.response) {
        // Backend response error
        message = error.response.data.message || "Login failed. Please try again.";
      } else if (error.request) {
        // Network error occurred
        message = "Network error. Please check your connection and try again.";
      }
      setSnackbarMessage(message);
      setSnackbarSeverity("error"); // Set to error severity
      setSnackbarOpen(true); // Show error snackbar
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
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

      {/* Snackbar for displaying error/success messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Loginpage;
