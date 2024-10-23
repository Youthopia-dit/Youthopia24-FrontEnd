import React, { useState } from 'react';
import './Signuppage.css';
import bg1 from '../../assets/bg1.png';
import youthopia_logo from '../../assets/youthopia-logo.png';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Signuppage = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');
  const [formData, setFromData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setSnackbarMessage('Passwords do not match.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    console.log(formData);
    navigate('/signup/question', { state: formData });
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
          <h2> Welcome </h2>
          <h3> Sign up to continue </h3>
          <form onSubmit={handleSubmit}>
            <div>
              <p>
                <input
                  id="name"
                  className='input-fields'
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input
                className='input-fields'
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input
                  id="phone"
                  className='input-fields'
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input
                  id="pass"
                  type="password"
                  className='input-fields'
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input
                  id="conf_pass"
                  className='input-fields'
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </p>
              <button type="submit" id="Next">
                Sign Up
              </button>
              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Signuppage;
