import React from 'react';
import "./Loginpage.css"
function Loginpage() {
    return (<>
    <section class="img">
  
  <div class="img">
   
  </div>
</section>
   <h1> Welcome Back </h1>
   <p>Please login to continue</p>
   <form>
    <div >
   <p><input id="button" type="text" name="username" placeholder="username" /></p> 
    <p><input id="button" type="number" name="username" placeholder="password" /></p>
    <div class="remem"><a><input type="checkbox" name="checkbox"/>Remember me</a>
       <a>forgot password</a>
   </div>

    <p><input id="button" class="button" type="button"  value="Login"></input></p> 
    </div>
    
   </form>
   
    </>   
    );
}

export default Loginpage;