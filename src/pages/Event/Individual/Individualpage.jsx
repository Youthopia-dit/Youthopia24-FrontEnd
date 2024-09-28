import React from 'react';
import "./individualpage.css"
function IndividualEvent() {
    return (<>
    <div class="event">
        <div class="image"></div>
   <section> <h1 >Event name</h1>
    <button class="reg-btn">Register</button></section>
   <section class="event-info">
    <h3 >Date:</h3>
    <h3 >Time:</h3>
    <h3 >venue:</h3>
    
    </section>
   <div class="description"><h2>
   Description
   </h2>
   <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quas numquam tenetur nobis, incidunt ullam at pariatur. Accusamus,
     voluptate corrupti temporibus 
    hic voluptatum debitis odio dolorum ad, possimus at earum fuga.
   </p>
     
   </div>
   <div class="rules">
   <h2>Rules</h2>
   <ul type="square">
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
   </div>
   <div class="fees">
    <h2>Registration fees</h2>
   <section><b>For DIT:</b> 100/-</section>
    <section><b>For other:</b> 200/-</section>

   </div>
   <div class="coordinators">
   <h2>Event Coordinators</h2> 
   <section><b>Person 1:</b> 89******* </section>
   <section><b>Person 2:</b> 67********</section>

   </div>
   </div>
    </>   
    );
}

export default IndividualEvent;