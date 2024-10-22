import React, { useState } from 'react';
import './Signuppage.css';
import bg1 from '../../assets/bg1.png';
import youthopia_logo from '../../assets/youthopia-logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signuppage = () => {
  const [formData, setFromData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [confrimPassword, setConfirmPassword] = useState('');
  // const [tempStorage, setTempStorage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkDitOrNot = (e) => {
    e.preventDefault();
    localStorage.setItem('userInput', JSON.stringify(formData));
    navigate('/signup/question');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      return setError('Passwords do not match.');
    }
    try {
      const response = await axios.post(
        'http://localhost:3000/api/signup',
        formData
      );
      alert(response.data.message);
      // Navigate to OTP verification with email as state
      navigate('/verify-otp', { state: { email: formData.email } });
    } catch (error) {
      setError(error.response?.data?.message || 'Signup failed.');
    }
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
                  id="text"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  id="text"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  id="text"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  id="text"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
              </p>
              <button type="submit" id="Next" onClick={checkDitOrNot}>
                Sign Up
              </button>
              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signuppage;
