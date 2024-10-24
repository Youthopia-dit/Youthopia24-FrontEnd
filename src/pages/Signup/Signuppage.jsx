import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg1 from '../../assets/bg1.png';
import { Button, Checkbox, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import OtpModal from './otpModal';
import './Signuppage.css';

const Signuppage = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', phone: '' });
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };


  const handleVerifyEmailClick = async () => {
    if (formData.email === '') {
      setSnackbarMessage('Please enter an email to verify.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    try {
      const res = await axios.post('http://localhost:4000/api/user/sendOtp', { email: formData.email });
      setSnackbarMessage(res.data.message);
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setOtpModalOpen(true);
    } catch (error) {
      setSnackbarMessage(error.response?.data?.message || 'Failed to send OTP. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpVerification = (verified) => {
    setIsEmailVerified(verified);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setSnackbarMessage('Passwords do not match.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    if (!isEmailVerified) {
      setSnackbarMessage('Please verify your email before signing up.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    navigate('/signup/question', { state: formData });
  };

  return (
    <>
      <div className="main">
        <div className="background">
          <img src={bg1} alt="bg-page" />
        </div>
        <div className="bordernp">
          <h2>Welcome</h2>
          <h3>Sign up to continue</h3>
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              className='input-fields'
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <input
              id="email"
              className='input-fields'
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              disabled={isEmailVerified}  
              required
            />
            <div className="verify-email-text">
              <Button onClick={handleVerifyEmailClick} variant="contained">Verify Email</Button>
              <Checkbox checked={isEmailVerified} disabled style={{ marginLeft: '10px' }} />
            </div>
            <input
              id="phone"
              className='input-fields'
              type="number"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <input
              id="pass"
              className='input-fields'
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              id="conf_pass"
              className='input-fields'
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <button type="submit" id="Next" disabled={!isEmailVerified}>Sign Up</button>
          </form>
        </div>
      </div>

      <OtpModal
        email={formData.email}
        otpModalOpen={otpModalOpen}
        setOtpModalOpen={setOtpModalOpen}
        onOtpVerification={handleOtpVerification}
      />

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
