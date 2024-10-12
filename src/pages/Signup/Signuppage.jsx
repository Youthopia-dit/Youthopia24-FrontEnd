import React from 'react';
import "./Signuppage.css"
import logo from '../../assets/logo.png'

function Signuppage() {
    return (<>
    <div className="card-wrapper">
   <img src={logo} alt="" />


    <div className="sign-up-form">
      <h2>Welcome Back</h2>
      <h2>Login to continue</h2>
      <form className='entry-field'>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <a href="">Verify Email</a>
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">NEXT</button>
      </form>
    </div>
    </div>


    
    </>   
    );
}

export default Signuppage;