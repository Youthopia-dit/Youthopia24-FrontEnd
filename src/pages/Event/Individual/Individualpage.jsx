import React from 'react';
import "./individualpage.css"
function IndividualEvent() {
    return (<>
    {/* event image */}
    <section class="img">
  
        <div class="image">
         
        </div>
     </section>
     {/* details section */}
   <section class="details"> 
    <div class="nr"><h1 >Event name</h1>
    <button class="reg-btn">Register</button></div>
   <div class="info">
    <h3 >Date: 2*/**/** </h3>
    <h3 >Time: **:**:**</h3>
    <h3 >Venue:veda</h3>
    
    </div>
   <h2>
   Description
   </h2>
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quas numquam tenetur nobis, incidunt ullam at pariatur. Accusamus,
     voluptate corrupti temporibus 
    hic voluptatum debitis odio dolorum ad, possimus at earum fuga.
   </p>
   <h2>Rules</h2>
   <ul  class="ruleli">
   <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Minima error doloribus repellendus fugit, vitae architecto vero
     eveniet sapiente quisquam temporibus at esse porro rem
     consequatur praesentium accusamus et. Deserunt, veritatis!</li>
   <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Minima error doloribus repellendus fugit, vitae architecto vero
     eveniet sapiente quisquam temporibus at esse porro rem
     consequatur praesentium accusamus et. Deserunt, veritatis!</li>
   <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Minima error doloribus repellendus fugit, vitae architecto vero
     eveniet sapiente quisquam temporibus at esse porro rem
     consequatur praesentium accusamus et. Deserunt, veritatis!</li>
   </ul>
   
   <div class="fees">
    <h2>Registration fees</h2>
   <p class="space"><b>For DIT:</b> 100/-</p>
    <p class="space"><b>For other:</b> 200/-</p>

   </div>
   <div class="coordinators">
   <h2>Event Coordinators</h2> 
   <p class="space"><b>Person 1:</b> 89*******</p>
   <p class="space"><b>Person 2:</b> 67********</p>

   </div>
   </section>
   
    </>   
    );
}

export default IndividualEvent;