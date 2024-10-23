import React, { useState, useEffect } from 'react';
import './Signuppage.css';
import bg1 from '../../assets/bg1.png';
import youthopia_logo from '../../assets/youthopia-logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [formdata, setFormData] = useState({});
  const [isCollege, setIsCollege] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
  useEffect(() => {
    setFormData(data);
    if (data.college === 'DIT University') {
      setIsCollege(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      console.log("Test");
      const res = await axios.post('https://27.123.248.68:4000/api/user/initialsignup', formdata);
      console.log(res);
      if (res.status === 201) {
        navigate('/');
        setSnackbarMessage('Sign up successful!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        localStorage.setItem('authToken', res.data.token);
      }
    } catch (error) {
      console.log(error.response.data.message);
      setSnackbarMessage(error.response.data.message);
      setSnackbarSeverity('error'); // Set to error severity
      setSnackbarOpen(true);
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
          <h2 className="sign_no">Just a little more left</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <p>
                <input
                  id="college"
                  className='input-fields'
                  type="text"
                  name="college"
                  placeholder="College Name"
                  value={isCollege ? 'DIT University' : formdata.college}
                  onChange={handleChange}
                  disabled={isCollege}
                  required
                />
              </p>
              <p>
                <input
                  id="college id"
                  className='input-fields'
                  type="text"
                  name="collegeId"
                  placeholder="Roll No. / Student ID"
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input
                  id="year"
                  className='input-fields'
                  type="text"
                  name="year"
                  placeholder="Year"
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input
                  id="branch"
                  type="text"
                  className='input-fields'
                  name="branch"
                  placeholder="Branch"
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                {!isCollege && <input
                  id="gov"
                  className='input-fields'
                  type="text"
                  name="governmentId"
                  placeholder="Personal ID (Aadhar/DL)"
                  onChange={handleChange}
                  required
                />}
              </p>
            </div>

            <button
              type="submit"
              id="Next"
              className="button"
            >
              Sign up
            </button>
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
}

export default SignIn;
