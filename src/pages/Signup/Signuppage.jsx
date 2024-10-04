import React from 'react';
import "./Signuppage.css"
function Signuppage() {
    return (<>
    <div class="card">
   <img src="" alt="" />


    <div className="signup-form">
      <h2>Welcome</h2>
      <h2>Create a New Account</h2>
      <form>
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