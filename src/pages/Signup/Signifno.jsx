import React, { useState } from 'react';
import './Signuppage.css';
import bg1 from '../../assets/bg1.png';
import youthopia_logo from '../../assets/youthopia-logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signifno() {
  const [formdata, setFormData] = useState({
    collegeName: '',
    collegeId: '',
    year: '',
    branch: '',
    governmentId: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formdata.collegeName ||
      !formdata.collegeId ||
      !formdata.year ||
      !formdata.branch ||
      !formdata.governmentId
    ) {
      return alert('Enter all data');
    }

    const data = JSON.parse(localStorage.getItem('userInput'));

    const submitData = { ...data, ...formdata };

    axios({
      method: 'post',
      url: 'https://27.123.248.68:4000/api/user/initialSignup',
      data: submitData,
    });

    console.log('Non-Dit Signup Data:', formdata);
    alert('Non-Dit Signup Complete!');
    navigate('/');
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
          <h2 className="sign_no">Non DITian</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <p>
                <input
                  id="text"
                  type="text"
                  name="collegeName"
                  placeholder="College Name"
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  id="text"
                  type="text"
                  name="collegeId"
                  placeholder="College Identity"
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
              <p>
                <input
                  id="text"
                  type="text"
                  name="branch"
                  placeholder="Branch"
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  id="text"
                  type="text"
                  name="governmentId"
                  placeholder="Government ID (Aadhar/DL)"
                  onChange={handleChange}
                />
              </p>
            </div>

            <button
              type="submit"
              id="Next"
              className="button"
              onClick={handleSubmit}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signifno;
